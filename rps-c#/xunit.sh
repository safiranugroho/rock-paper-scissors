#!/bin/sh
set -e
pwd
cd rps-c#/rps.Tests/
dotnet build
dotnet test
jobs