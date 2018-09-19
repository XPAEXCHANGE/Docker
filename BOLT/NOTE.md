# NOTE
## CMD
```shell
docker run --name MyPostgres -d -p 5432 \
-v ./Postgres:/var/lib/postgresql/data \
-e POSTGRES_DB=eflab \
-e POSTGRES_USER=admin \
-e POSTGRES_PASSWORD='12345' \
postgres:latest
```
