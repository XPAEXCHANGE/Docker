FROM ubuntu:16.04
LABEL maintainer="Luphia (luphia.chang@tideisun.com)"
EXPOSE 8545 8546

WORKDIR /root
RUN apt-get update
RUN apt-get install openssl libtool autoconf automake uuid-dev build-essential gcc g++ python-software-properties unzip make git libcap2-bin vim curl wget sudo screen -y
RUN useradd ubuntu -ms /bin/bash
RUN tmppw=$(date +%s | sha256sum | base64 | head -c 32 ; echo) && echo "ubuntu:${tmppw}" | chpasswd
RUN adduser ubuntu sudo
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
USER ubuntu
WORKDIR /home/ubuntu
RUN /bin/bash -c 'bash <(curl https://raw.githubusercontent.com/Luphia/SIMPLE/master/shell/install-bc2.sh -kL)'
RUN /bin/bash -c 'bash <(curl https://get.parity.io -kL)'
RUN mkdir /home/ubuntu/shares
RUN mkdir /home/ubuntu/parity
RUN mkdir /home/ubuntu/parity/keys
RUN mkdir /home/ubuntu/parity/keys/MainChain
COPY genesis.json /home/ubuntu/parity/genesis.json
COPY config.toml /home/ubuntu/parity/config.toml
USER root
#CMD keypw1=$(date +%s | sha256sum | base64 | head -c 32 ; echo) && \
#keypw2=$(date +%s | sha256sum | base64 | head -c 32 ; echo) && \
#key1=$(echo "$keypw1\n$keypw1" | parity account new --keys-path /home/ubuntu/parity/keys --chain /home/ubuntu/parity/genesis.json | grep -Po "0x[0-9a-f]*") && \
#key2=$(echo "$keypw2\n$keypw2" | parity account new --keys-path /home/ubuntu/parity/keys --chain /home/ubuntu/parity/genesis.json | grep -Po "0x[0-9a-f]*") && \
#echo $keypw1 > /home/ubuntu/parity/keys/MainChain/${key1}.pw && \
#echo $keypw2 > /home/ubuntu/parity/keys/MainChain/${key2}.pw && \
#sed -i "s/0x7a96a850eddd0f635b9d7ec867b13a380069bedc/$key1/g" /home/ubuntu/parity/genesis.json && \
#sed -i "s/0x7a96a850eddd0f635b9d7ec867b13a380069bedc/$key1/g" /home/ubuntu/parity/config.toml && \
#cp /home/ubuntu/parity/keys/MainChain/* /home/ubuntu/shares && \
#parity --config $HOME/parity/config.toml
CMD /bin/bash