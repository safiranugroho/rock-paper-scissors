#!/bin/sh
set -e
pwd
cd rps-c#/rps.Tests/
dotnet restore
dotnet build
dotnet test
jobs