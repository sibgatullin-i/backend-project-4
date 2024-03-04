#!/usr/bin/node
import { program } from 'commander';
import fsp from 'fs/promises';

program
  .option('--first')
  .option('-s, --separator <char>')
  .version('1.0.0')

program.parse();

const options = program.opts();

if (options.length === 0) {

}
