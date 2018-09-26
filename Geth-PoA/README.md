```shell
cd Docker/Geth-PoA
docker image build -t geth-poa .
docker image ls
docker run -t -i -p 8546 -p 8545 -v /YOUR/FOLDER:/home/ubuntu/shares geth-poa
ctrl + p + q
docker container ls
```
