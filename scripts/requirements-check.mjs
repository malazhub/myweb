import { readFileSync, existsSync } from 'node:fs';

const read = (path) => readFileSync(path, 'utf8');
const types = read('src/types.ts');
const app = read('src/App.tsx');
const modal = read('src/components/ConstructionModal.tsx');
const copy = read('src/appCopy.ts');
const i18n = read('src/i18n.ts');
const header = read('src/components/Header.tsx');
const html = read('index.html');

const checks = [
  ['Construction category appears before Management', types.indexOf("id: 'construction'") < types.indexOf("id: 'management'")],
  ['Construction is a first-class app in the shared apps grid', /id: 'construction',[\s\S]*?category: 'construction'/.test(types) && app.includes('<AppCard')],
  ['Construction opens its own screen from the app card', app.includes("app.id === 'construction'") && app.includes('<ConstructionModal')],
  ['Construction inquiry has name, email, country code, phone and required message fields', ['nameLabel', 'emailLabel', 'countryCodeLabel', 'phoneLabel', 'messageLabel'].every((key) => modal.includes(key)) && /name="message" required/.test(modal)],
  ['Inquiry sends the customer message to the requested email and only then shows thank-you', modal.includes('https://formsubmit.co/ajax/malazjanbeih@gmail.com') && modal.includes('message: message.trim()') && modal.includes("setScreen('success')") && modal.includes("'true'].includes(result.success") && modal.includes('mailto:malazjanbeih@gmail.com')],
  ['Success message contains the requested assurance in all nine languages', (copy.match(/thankYouBody:/g) || []).length === 9 && copy.includes('We will get back to you as soon as possible. Thank you for your attention.')],
  ['Sana points to the requested URL', types.includes("https://sanabase.github.io/sana/")],
  ['Sana uses the new local portrait asset', types.includes('images/sana-portrait.webp') && existsSync('public/images/sana-portrait.webp')],
  ['Agenda card uses the supplied poster image', types.includes('images/agenda-poster.webp') && existsSync('public/images/agenda-poster.webp')],
  ['Agenda poster displays at its full 3:4 proportions', read('src/components/AppCard.tsx').includes("app.id === 'agenda' ? 'aspect-[3/4]' : 'aspect-[9/16]'")],
  ['School campus photo is a real Wikimedia photograph with attribution', modal.includes('Building_of_school.jpg') && modal.includes('CC BY-SA 4.0') && modal.includes('commons.wikimedia.org/wiki/File:Building_of_school.jpg') && modal.includes('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Building_of_school.jpg/960px-Building_of_school.jpg')],
  ['Mall photo is a real Wikimedia photograph with attribution', modal.includes('Shopping_Mall_Atrium.jpeg') && modal.includes('CC0') && modal.includes('commons.wikimedia.org/wiki/File:Shopping_Mall_Atrium.jpeg')],
  ['About and app descriptions are localized across all nine languages', (copy.match(/aboutBody:/g) || []).length === 9 && (copy.match(/sana:\s*\{/g) || []).length === 9 && (copy.match(/construction:\s*\{/g) || []).length === 9],
  ['The visible platform brand is my platform everywhere', ![copy,i18n,header,html,modal].join('\n').toLowerCase().includes('dady') && i18n.split("siteName: 'my platform'").length - 1 === 9 && i18n.split("footerRights: 'my platform.'").length - 1 === 9],
  ['Category cards navigate to the selected category', app.includes('setActiveCategory(cat.id)') && app.includes('scrollToBrowse()')],
];

const failed = checks.filter(([, passed]) => !passed);
for (const [name, passed] of checks) console.log((passed ? 'PASS ' : 'FAIL ') + name);
if (failed.length) {
  console.error(failed.length + ' requirement check(s) failed.');
  process.exit(1);
}
console.log('All ' + checks.length + ' requested-feature checks passed.');
