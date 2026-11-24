import { readFileSync, existsSync } from 'node:fs';

const read = (path) => readFileSync(path, 'utf8');
const types = read('src/types.ts');
const app = read('src/App.tsx');
const modal = read('src/components/ConstructionModal.tsx');
const copy = read('src/appCopy.ts');

const checks = [
  ['Construction category appears before Management', types.indexOf("id: 'construction'") < types.indexOf("id: 'management'")],
  ['Construction is a first-class app in the shared apps grid', /id: 'construction',[\s\S]*?category: 'construction'/.test(types) && app.includes('<AppCard')],
  ['Construction opens its own screen from the app card', app.includes("app.id === 'construction'") && app.includes('<ConstructionModal')],
  ['Construction inquiry has name, email, country code and phone fields', ['nameLabel', 'emailLabel', 'countryCodeLabel', 'phoneLabel'].every((key) => modal.includes(key))],
  ['Inquiry submit shows thank-you only after successful service response', modal.includes('https://formsubmit.co/ajax/malazjanbeih@gmail.com') && modal.includes("setScreen('success')") && modal.includes('!response.ok')],
  ['Sana points to the requested URL', types.includes("https://sanabase.github.io/sana/")],
  ['Agenda card uses the committed screenshot file', types.includes('images/image.png') && existsSync('public/images/image.png')],
  ['School campus photo is a real Wikimedia photograph with attribution', modal.includes('SCHOOl_Building_morning_view.jpg') && modal.includes('CC BY-SA 4.0') && modal.includes('commons.wikimedia.org/wiki/File:SCHOOl_Building_morning_view.jpg')],
  ['Mall photo is a real Wikimedia photograph with attribution', modal.includes('Shopping_Mall_Atrium.jpeg') && modal.includes('CC0') && modal.includes('commons.wikimedia.org/wiki/File:Shopping_Mall_Atrium.jpeg')],
  ['About and app descriptions are localized across all nine languages', (copy.match(/aboutBody:/g) || []).length === 9 && (copy.match(/sana:\s*\{/g) || []).length === 9 && (copy.match(/construction:\s*\{/g) || []).length === 9],
  ['Category cards navigate to the selected category', app.includes('setActiveCategory(cat.id)') && app.includes('scrollToBrowse()')],
];

const failed = checks.filter(([, passed]) => !passed);
for (const [name, passed] of checks) console.log((passed ? 'PASS ' : 'FAIL ') + name);
if (failed.length) {
  console.error(failed.length + ' requirement check(s) failed.');
  process.exit(1);
}
console.log('All ' + checks.length + ' requested-feature checks passed.');
