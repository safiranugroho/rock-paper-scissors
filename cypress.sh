#!/bin/sh
set -e
yarn start &
yarn test:cypress
jobs
