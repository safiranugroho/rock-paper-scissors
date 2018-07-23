#!/bin/sh
set -e
pwd
cd rps-csharp/rps.Tests/
dotnet build
dotnet test
jobs