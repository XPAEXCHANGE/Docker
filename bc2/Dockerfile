FROM ubuntu:16.04
LABEL maintainer="Luphia (luphia.chang@tideisun.com)"

WORKDIR /root
RUN apt-get update
RUN apt-get install openssl libtool autoconf automake uuid-dev build-essential gcc g++ python-software-properties unzip make git libcap2-bin vim curl wget sudo screen -y
RUN /bin/bash -c 'bash <(curl https://raw.githubusercontent.com/Luphia/SIMPLE/master/shell/install-bc2.sh -kL)'
RUN mkdir /test
RUN cd test
RUN npm i ganache-core
COPY test.js /root/test.js
CMD node test.js