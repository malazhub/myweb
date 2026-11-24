import { chromium } from 'playwright';

const url = process.env.TEST_BASE_URL || 'http://127.0.0.1:4173/myweb/';
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const pageErrors = [];

page.on('pageerror', (error) => pageErrors.push(error.stack || error.message));

try {
  const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  if (!response || !response.ok()) {
    throw new Error(`Page request failed: ${response?.status() ?? 'no response'} for ${url}`);
  }

  await page.locator('#root h1').waitFor({ state: 'visible', timeout: 15000 });

  const heading = (await page.locator('#root h1').innerText()).replace(/\\s+/g, ' ').trim();
  const bodyText = (await page.locator('#root').innerText()).trim();

  if (!heading || bodyText.length < 100) {
    throw new Error(`App mounted but appears empty. Heading: "${heading}", text length: ${bodyText.length}`);
  }

  if (pageErrors.length) {
    throw new Error(`Browser runtime errors:\\n${pageErrors.join('\\n')}`);
  }

  await page.screenshot({ path: '/tmp/myweb-smoke-test.png', fullPage: true });
  console.log(`SMOKE TEST PASSED: HTTP ${response.status()}, heading="${heading}", rendered text=${bodyText.length} characters.`);
} catch (error) {
  console.error('SMOKE TEST FAILED:', error);
  if (pageErrors.length) console.error('PAGE ERRORS:', pageErrors.join('\\n'));
  await page.screenshot({ path: '/tmp/myweb-smoke-test-failed.png', fullPage: true }).catch(() => {});
  process.exitCode = 1;
} finally {
  await browser.close();
}
