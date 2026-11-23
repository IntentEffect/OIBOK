import { readFileSync } from 'node:fs';

const pages = JSON.parse(readFileSync(new URL('./extra-pages.json', import.meta.url), 'utf8'));
export const guideVersion = pages.find(page => page.kind === 'practitioner-guide').component_version;
