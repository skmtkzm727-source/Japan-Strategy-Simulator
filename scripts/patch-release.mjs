import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.argv[2] || '.');

function replaceOnce(relativePath, before, after, label) {
  const file = path.join(root, relativePath);
  const source = fs.readFileSync(file, 'utf8');
  if (source.includes(after)) return;
  if (!source.includes(before)) {
    throw new Error(`Cannot apply release patch (${label}): expected source text was not found in ${relativePath}`);
  }
  fs.writeFileSync(file, source.replace(before, after), 'utf8');
}

replaceOnce(
  'src/simulation.js',
  "const LEGACY_SAVE_KEY = 'nation-frontier-save-v1';\n",
  "const LEGACY_SAVE_KEY = 'nation-frontier-save-v1';\n\nexport function populationInOku(populationTenThousands) {\n  return Number(populationTenThousands || 0) / 10000;\n}\n",
  'population unit conversion'
);
replaceOnce(
  'src/simulation.js',
  '  state.population = Math.round(state.population + 1 + stats.population / 1000);\n',
  '  state.population = +(state.population + 1 + stats.population / 10000).toFixed(3);\n',
  'population growth scale'
);
replaceOnce(
  'src/main.js',
  '  createNewGame, loadGame, saveGame, getSelectedPrefecture, getSelectedCity, getCityStats, getNationalCityStats,\n',
  '  createNewGame, loadGame, saveGame, getSelectedPrefecture, getSelectedCity, getCityStats, getNationalCityStats, populationInOku,\n',
  'population formatter import'
);
replaceOnce(
  'src/main.js',
  '${(state.population / 100).toFixed(2)}億人',
  '${populationInOku(state.population).toFixed(2)}億人',
  'national population display'
);
replaceOnce(
  'src/main.js',
  'function render() {\n  updateTopbar();',
  'function render() {\n  // Auto-save after every state-driven render; the manual save button remains available.\n  saveGame(state);\n  updateTopbar();',
  'automatic save after render'
);
replaceOnce(
  'src/main.js',
  "  if (event.target.id === 'taxSlider') {\n    setTaxRate(state, event.target.value);",
  "  if (event.target.id === 'taxSlider') {\n    setTaxRate(state, event.target.value);\n    saveGame(state);",
  'automatic save after tax change'
);
replaceOnce(
  'src/main.js',
  "document.querySelector('#modalBackdrop').addEventListener('click', (event) => {",
  "window.addEventListener('pagehide', () => saveGame(state));\ndocument.querySelector('#modalBackdrop').addEventListener('click', (event) => {",
  'save on page close'
);
replaceOnce('index.html', 'title="セーブ"', 'title="手動セーブ（自動保存も有効）"', 'save button title');
replaceOnce('index.html', 'EARLY ACCESS <span>0.2.0</span>', 'EARLY ACCESS <span>0.2.1</span>', 'version label');
replaceOnce('package.json', '"version": "0.2.0"', '"version": "0.2.1"', 'package version');

const testPath = path.join(root, 'tests/simulation.test.js');
let tests = fs.readFileSync(testPath, 'utf8');
if (!tests.includes('national population is converted from ten-thousand-person units')) {
  tests = tests.replace(
    '  placeBuilding, demolishTile, advanceMonth, startResearch, loadGame, saveGame\n',
    '  placeBuilding, demolishTile, advanceMonth, startResearch, loadGame, saveGame, populationInOku\n'
  );
  tests += `\n\ntest('national population is converted from ten-thousand-person units to hundred-million units', () => {\n  assert.equal(populationInOku(11940), 1.194);\n  assert.equal(populationInOku(0), 0);\n});\n\ntest('monthly population growth keeps the ten-thousand-person scale', () => {\n  const state = createNewGame();\n  const initialPopulation = state.population;\n  const connectedPopulation = getNationalCityStats(state).population;\n  advanceMonth(state);\n  assert.equal(state.population, initialPopulation + 1 + connectedPopulation / 10000);\n});\n`;
  fs.writeFileSync(testPath, tests, 'utf8');
}

const readmePath = path.join(root, 'README.md');
let readme = fs.readFileSync(readmePath, 'utf8');
readme = readme.replace('セーブボタンで同じブラウザに進行状況を保存します。', '操作後に自動保存されます。セーブボタンから任意のタイミングで手動保存もできます。');
fs.writeFileSync(readmePath, readme, 'utf8');

console.log(`NATION FRONTIER release patch applied to ${root}`);
