#!/bin/sh
set -e
pwd
cd rps
pwd
yarn install
yarn build
cd ..
pwd
cd rps-c#/rps
dotnet restore
dotnet build