#!/bin/sh
set -e
yarn start &
yarn test:cypress
jobs
kill %1
