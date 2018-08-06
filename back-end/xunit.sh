#!/bin/sh
set -e
pwd
cd back-end/rps.Tests/
dotnet build
dotnet test
jobs