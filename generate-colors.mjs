import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Путь к входному CSS файлу
const cssFilePath = join(__dirname, 'src/styles/css/_variables.css');
// Путь для выходного TypeScript файла с типом
const typeOutputPath = join(__dirname, 'src/types/colors.ts');
// Путь для выходного CSS файла с классами
const cssOutputPath = join(__dirname, 'src/styles/css/_color-classes.css');

// Читаем CSS файл
const cssContent = readFileSync(cssFilePath, 'utf-8');

// Регулярное выражение для поиска цветовых переменных
const colorRegex = /--color-colors-([a-zA-Z0-9-äöüÄÖÜ]+):/g;

// Извлекаем все названия цветов
const colorNames = new Set();
let match;

while ((match = colorRegex.exec(cssContent)) !== null) {
    const colorName = match[1];
    colorNames.add(colorName);
}

// Конвертируем в массив и сортируем
const sortedColorNames = Array.from(colorNames).sort();

// Генерируем TypeScript тип
const typeContent = `/**
 * Auto-generated color type
 * Do not edit directly
 */

export type TColor =
${sortedColorNames.map(name => `  | '${name}'`).join('\n')};
`;

// Генерируем CSS классы
const cssClassesContent = `/**
 * Auto-generated color classes
 * Do not edit directly
 */

${sortedColorNames.map(name => {
    return `.Color__${name} {
  color: var(--color-colors-${name});
}

.BgColor__${name} {
  background-color: var(--color-colors-${name});
}

.BorderColor__${name} {
  border-color: var(--color-colors-${name});
}`;
}).join('\n\n')}
`;

// Записываем файлы
writeFileSync(typeOutputPath, typeContent, 'utf-8');
writeFileSync(cssOutputPath, cssClassesContent, 'utf-8');

console.log(`✅ Generated TColor type with ${sortedColorNames.length} colors`);
console.log(`📄 Type file: ${typeOutputPath}`);
console.log(`📄 CSS file: ${cssOutputPath}`);
console.log(`\nColors: ${sortedColorNames.join(', ')}`);
