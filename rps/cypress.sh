#!/bin/sh
set -e
pwd
cd ..
cd rps-c#/rps/
pwd
dotnet build
dotnet run &
cd ../..
pwd
cd rps
pwd
yarn build
yarn start &
yarn test:cypress
jobs
