# Deploy XPA Chain with Docker
```shell
cd Docker/XPAChain
docker image build -t xpachain .
docker image ls
docker run -t -i -p 8545 -p 80 -p 443 xpachain
ctrl + p + q
docker container ls
```
