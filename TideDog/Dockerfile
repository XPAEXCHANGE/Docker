FROM ubuntu:16.04
LABEL maintainer="Luphia (luphia.chang@tideisun.com)"

WORKDIR /root
RUN apt-get update
RUN apt-get install openssl libtool autoconf automake uuid-dev build-essential gcc g++ python-software-properties unzip make git libcap2-bin vim curl wget sudo screen -y
RUN /bin/bash -c 'bash <(curl https://raw.githubusercontent.com/Luphia/SIMPLE/master/shell/install-env.sh -kL)'
RUN adduser ubuntu && echo "ubuntu:1234567890" | chpasswd && adduser ubuntu sudo
USER ubuntu
WORKDIR /home/ubuntu
RUN git clone https://github.com/XPAEXCHANGE/TideDog
COPY Test.js /home/ubuntu/TideDog/libs/
COPY config.toml /home/ubuntu/TideDog/
WORKDIR /home/ubuntu/TideDog
RUN npm i
CMD /bin/bash