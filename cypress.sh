#!/bin/sh
set -e
yarn start &
yarn test:cypress
kill %1
