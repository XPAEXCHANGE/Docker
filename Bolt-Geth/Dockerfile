FROM ubuntu:16.04
LABEL maintainer="Luphia (luphia.chang@tideisun.com)"
EXPOSE 8545 8546

WORKDIR /root
RUN apt-get update
RUN apt-get install openssl libtool autoconf automake uuid-dev build-essential gcc g++ python-software-properties unzip make git libcap2-bin vim curl wget sudo screen -y
RUN apt-get install software-properties-common -y
RUN add-apt-repository ppa:ethereum/ethereum -y
RUN apt-get update
RUN apt-get install ethereum -y
RUN /bin/bash -c 'bash <(curl https://raw.githubusercontent.com/Luphia/SIMPLE/master/shell/install-env.sh -kL)'
RUN mkdir /keypw
COPY keyparser /keyparser
WORKDIR /keyparser
RUN npm i --unsafe-perm
RUN useradd ubuntu -ms /bin/bash
RUN tmppw=$(date +%s | sha256sum | base64 | head -c 32 ; echo) && echo "ubuntu:${tmppw}" | chpasswd
RUN adduser ubuntu sudo
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
WORKDIR /home/ubuntu
RUN git clone https://github.com/BOLT-Protocol/contracts
WORKDIR /home/ubuntu/contracts
RUN git checkout v1.1.1
RUN npm install --unsafe-perm
RUN npm install -g truffle --unsafe-perm
RUN cp env.js.example env.js
WORKDIR /keyparser

CMD keypw=$(date +%s | sha256sum | base64 | head -c 32 ; echo) && \
key1=$(echo "${keypw}\n${keypw}" | geth account new --keystore /home/ubuntu/keystore | grep -Po "\{[0-9a-f]*\}" | cut -c 2-41) && \
key2=$(echo "${keypw}\n${keypw}" | geth account new --keystore /home/ubuntu/keystore | grep -Po "\{[0-9a-f]*\}" | cut -c 2-41) && \
key3=$(echo "${keypw}\n${keypw}" | geth account new --keystore /home/ubuntu/keystore | grep -Po "\{[0-9a-f]*\}" | cut -c 2-41) && \
mkdir /home/ubuntu/keypw && \
echo "${keypw}" > /keyparser/keypw && \
node . && \
echo "BOLT\n2\n2\n3\n${key1}\n\n${key1}\n${key2}\n${key3}\n\n1\n2\n2\n\n" | puppeth || true && \
geth init /keyparser/BOLT.json --datadir /root/data && \
echo "${keypw}" | geth --datadir /root/data --keystore /home/ubuntu/keystore --unlock ${key1} --mine --rpc --rpcaddr 0.0.0.0 --rpcport 8545 --rpccorsdomain '*' --rpcapi personal,admin,db,eth,net,web3,miner,shh,txpool,debug --ws --wsaddr 0.0.0.0 --wsport 8546 --wsorigins '*' --wsapi personal,admin,db,eth,net,web3,miner,shh,txpool,debug & \
echo "Yo!!!"