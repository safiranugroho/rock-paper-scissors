#!/bin/sh

set -e

npm start &
npm test:cypress

kill %1
