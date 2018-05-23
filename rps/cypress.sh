#!/bin/sh
set -e
pwd
cd rps-c#/rps/
pwd
dotnet build
dotnet run &
cd ../..
pwd
cd rps
pwd
yarn install
yarn build
yarn start &
yarn test:cypress
jobs
