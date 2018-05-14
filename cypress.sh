#!/bin/sh

set -e

npm start &
npm test:cypress && fg

wait %2

kill %1
