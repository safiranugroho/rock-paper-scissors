## Running Concourse CI locally
```
docker-compose up -d
fly -t local login -c http://127.0.0.1:8080 -u admin -p admin
fly sp -p rps -c pipeline.yml -t local
open http://127.0.0.1:8080/teams/main/pipelines/rps
```
