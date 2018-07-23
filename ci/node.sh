#!/usr/bin/env sh

ROOT_FOLDER=$( pwd )
export NPM_CONFIG_PREFIX=$ROOT_FOLDER/node_modules

cd rock-paper-scissors/rps
npm install
npm run-script build