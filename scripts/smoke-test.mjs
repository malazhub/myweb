import { execFileSync } from 'node:child_process';

const chrome = process.env.CHROME_PATH || 'google-chrome';
const url = process.env.TEST_BASE_URL || 'http://127.0.0.1:4173/myweb/';

try {
  const html = execFileSync(
    chrome,
    [
      '--headless=new',
      '--no-sandbox',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--disable-background-networking',
      '--no-first-run',
      '--dump-dom',
      '--virtual-time-budget=10000',
      '--timeout=20000',
      url,
    ],
    { encoding: 'utf8', timeout: 30000, maxBuffer: 10 * 1024 * 1024 },
  );

  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '';
  const heading = body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const text = body.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  if (!heading || text.length < 100) {
    throw new Error('Blank page: React did not render the homepage. heading="' + (heading || '') + '", rendered text length=' + text.length + '.');
  }

  console.log('BROWSER SMOKE TEST PASSED: heading="' + heading + '", rendered text length=' + text.length + '.');
} catch (error) {
  console.error('BROWSER SMOKE TEST FAILED:', error.message);
  process.exitCode = 1;
}
