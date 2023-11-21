//var generateName = require('sillyname');
import generateName from 'sillyname';
var sillyName = generateName();

console.log(`my name is ${sillyName}.`);
// my name is Bubbles-Snuffles-Gizmo-Fuzzy.

import superhero from 'superhero-name-library';

const name = superhero.random();
console.log(`im ${name}`);
