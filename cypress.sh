#!/bin/sh

set -e

npm start &

wait %1

npm test:cypress

kill %1
