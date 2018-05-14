#!/bin/sh
set -e
yarn start &
pkill Xvfb
yarn test:cypress
jobs
kill $(jobs -p)
