import path from 'path';
import fs from 'fs';
import Marc from '../src/index.js';
const { readFileSync } = fs;

const observations = JSON.parse(readFileSync(__dirname + '/News_Headlines-NYTimes-1-19-2018.json'));
const m = new Marc(observations, ' ');

console.log(new Array(10).fill(0).map(() => m.random()).join('\n'));
