import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';

const read = (path) => readFileSync(path, 'utf8');
const types = read('src/types.ts');
const app = read('src/App.tsx');
const modal = read('src/components/ConstructionModal.tsx');
const copy = read('src/appCopy.ts');
const i18n = read('src/i18n.ts');
const header = read('src/components/Header.tsx');
const footer = read('src/components/Footer.tsx');
const html = read('index.html');

const checks = [
  ['Construction category appears before Management', types.indexOf("id: 'construction'") < types.indexOf("id: 'management'")],
  ['Construction is a first-class app in the shared apps grid', /id: 'construction',[\s\S]*?category: 'construction'/.test(types) && app.includes('<AppCard')],
  ['Construction opens its own screen from the app card', app.includes("app.id === 'construction'") && app.includes('<ConstructionModal')],
  ['Construction inquiry has name, email, country code, phone and required message fields', ['nameLabel', 'emailLabel', 'countryCodeLabel', 'phoneLabel', 'messageLabel'].every((key) => modal.includes(key)) && /required name="message"/.test(modal)],
  ['Inquiry sends the customer message to the requested email and only then shows thank-you', modal.includes('action="https://formsubmit.co/malazjanbeih@gmail.com"') && modal.includes('method="POST"') && modal.includes('name="_next"') && modal.includes('construction-inquiry=sent') && !modal.includes('fetch(') && app.includes('construction-inquiry') && app.includes('closeConstruction')],
  ['Success message contains the requested assurance in all nine languages', (copy.match(/thankYouBody:/g) || []).length === 9 && copy.includes('We will get back to you as soon as possible. Thank you for your attention.')],
  ['Sana links to the canonical riobase Pages URL and describes the actual health-records app', types.includes("externalUrl: 'https://riobase.github.io/sana/'") && types.includes("Personal health records & medication reminders") && types.includes("Medication management")],
  ['Agenda points to its riobase GitHub Pages URL', types.includes("https://riobase.github.io/agenda/")],
  ['Active MyWeb catalog and localized copy contain no retired Sana Pages hostname', !types.includes('sanabase.github.io') && !copy.includes('sanabase.github.io')],
  ['Sana uses the new local portrait asset', types.includes('images/sana-portrait.webp') && existsSync('public/images/sana-portrait.webp')],
  ['Agenda card uses the exact user-supplied poster image', types.includes('images/agenda-poster.webp') && existsSync('public/images/agenda-poster.webp') && createHash('sha256').update(readFileSync('public/images/agenda-poster.webp')).digest('hex') === 'c3583bc6f751dbfb243b0b5290a5ae751853f0f1ef47ef751405b0316e560c63'],
  ['Agenda poster displays at its full 3:4 proportions', read('src/components/AppCard.tsx').includes("app.id === 'agenda' ? 'aspect-[3/4]' : 'aspect-[9/16]'")],
  ['School campus photo is a real Wikimedia photograph with attribution', modal.includes('Building_of_school.jpg') && modal.includes('CC BY-SA 4.0') && modal.includes('commons.wikimedia.org/wiki/File:Building_of_school.jpg') && modal.includes('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Building_of_school.jpg/960px-Building_of_school.jpg')],
  ['Mall photo is a real Wikimedia photograph with attribution', modal.includes('Shopping_Mall_Atrium.jpeg') && modal.includes('CC0') && modal.includes('commons.wikimedia.org/wiki/File:Shopping_Mall_Atrium.jpeg')],
  ['About and app descriptions are localized across all nine languages', (copy.match(/aboutBody:/g) || []).length === 9 && (copy.match(/sana:\s*\{/g) || []).length === 9 && (copy.match(/construction:\s*\{/g) || []).length === 9],
  ['The visible platform brand is SpaceHub in all locales, header, footer and browser title', i18n.split("siteName: 'SpaceHub'").length - 1 === 9 && i18n.split("footerRights: 'SpaceHub.'").length - 1 === 9 && header.includes('>S</span>') && footer.includes('>S</span>') && html.includes('<title>SpaceHub — Useful Digital Apps</title>')],
  ['Category cards navigate to the selected category', app.includes('setActiveCategory(cat.id)') && app.includes('scrollToBrowse()')],
];

const failed = checks.filter(([, passed]) => !passed);
for (const [name, passed] of checks) console.log((passed ? 'PASS ' : 'FAIL ') + name);
if (failed.length) {
  console.error(failed.length + ' requirement check(s) failed.');
  process.exit(1);
}
console.log('All ' + checks.length + ' requested-feature checks passed.');
