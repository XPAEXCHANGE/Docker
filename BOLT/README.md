# Docker Compose for BOLT
- DEPLOY postgresql
- DEPLOY parity
- DEPLOY contract https://github.com/BOLT-Protocol/contracts
- DEPLOY https://github.com/BOLT-Protocol/gringotts
- DEPLOY https://github.com/BOLT-Protocol/wizard_nodejs_demo
- EXEC wizard_nodejs_demo/test20TokenProposeDeposit.js

## Deploy postgresql
```shell
docker run --name PostgresBolt -d -p 5432 -v /YOUR/PATH/Postgres:/var/lib/postgresql/data -e POSTGRES_DB=bolt -e POSTGRES_USER=admin -e POSTGRES_PASSWORD='12345' postgres:latest
```