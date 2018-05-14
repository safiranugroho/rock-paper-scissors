#!/bin/sh
set -e
yarn start &
yarn test:cypress
jobs
kill $(jobs -p); exit 0
