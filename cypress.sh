#!/bin/sh

set -e

npm start &
npm test:cypress &

wait %2

kill %1
