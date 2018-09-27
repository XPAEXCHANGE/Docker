# Deploy Geth PoA with Docker
```shell
cd Docker/Bolt-Geth
docker image build -t bolt-geth .
docker image ls
docker run -t -i -p 8546 -p 8545 -v /YOUR/FOLDER:/home/ubuntu/shares geth-poa
ctrl + p + q
docker container ls
```
