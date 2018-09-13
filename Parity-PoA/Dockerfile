FROM ubuntu:16.04
LABEL maintainer="Luphia (luphia.chang@tideisun.com)"
EXPOSE 8545

WORKDIR /root
ENV tmppw $(date +%s | sha256sum | base64 | head -c 32 ; echo)
RUN apt-get update
RUN apt-get install openssl libtool autoconf automake uuid-dev build-essential gcc g++ python-software-properties unzip make git libcap2-bin vim curl wget sudo screen -y
RUN useradd ubuntu -ms /bin/bash
RUN echo "ubuntu:${tmppw}" | chpasswd
RUN adduser ubuntu sudo
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
USER ubuntu
WORKDIR /home/ubuntu
RUN /bin/bash -c 'bash <(curl https://raw.githubusercontent.com/Luphia/SIMPLE/master/shell/install-bc2.sh -kL)'
RUN /bin/bash -c 'bash <(curl https://get.parity.io -kL)'
RUN mkdir parity
COPY genesis.json /home/ubuntu/parity/genesis.json
COPY config.toml /home/ubuntu/parity/config.toml

CMD parity --config $HOME/parity/config.toml