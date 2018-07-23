#!/bin/sh
set -e
pwd
cd rps
pwd
yarn install
yarn build
cd ..
pwd
cd rps-csharp/rps
dotnet restore
dotnet build