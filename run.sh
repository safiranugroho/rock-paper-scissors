#!/bin/sh
trap 'kill %1' SIGINT
dotnet run -p back-end/rps/ | tee 1.log | sed -e 's/^/[Running api] /' & cd front-end/ && yarn start | tee 2.log | sed -e 's/^/[Running ui] /'
