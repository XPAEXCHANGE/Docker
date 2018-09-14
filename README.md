# Docker
docker files

## Build Parity PoA
cd Docker/Parity-PoA
docker image build -t parity-poa .
docker image ls
docker run -t -i -p 8545 -p 80 -p 443 parity-poa
ctrl + p + q
docker container ls

## Build XPAChain
cd Docker/XPAChain
docker image build -t xpachain .
docker image ls
docker run -t -i -p 8545 -p 80 -p 443 xpachain
ctrl + p + q
docker container ls
