# Deploy Parity PoA with Docker
```shell
cd Docker/Parity-PoA
docker image build -t parity-poa .
docker image ls
docker run -t -i -p 8545 -p 80 -p 443 -v /YOUR/FOLDER:/home/ubuntu/parity/keys parity-poa
ctrl + p + q
docker container ls
```