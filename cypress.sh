#!/bin/sh
set -e
yarn start &
yarn test:cypress
jobs
kill -9 $(jobs -p)
