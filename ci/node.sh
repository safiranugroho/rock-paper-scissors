#!/usr/bin/env sh

ROOT_FOLDER=$( pwd )
ln -s $ROOT_FOLDER/node_modules $ROOT_FOLDER/rock-paper-scissors/rps/node_modules

cd rock-paper-scissors/rps
npm install
npm run-script build