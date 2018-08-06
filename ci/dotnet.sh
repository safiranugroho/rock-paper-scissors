#!/usr/bin/env sh

ROOT_FOLDER=$( pwd )
export NUGET_PACKAGES=$ROOT_FOLDER/.nuget/packages

cd rock-paper-scissors/back-end/rps.Tests
dotnet restore
dotnet test