FROM ubuntu:16.04
LABEL maintainer="Luphia (luphia.chang@tideisun.com)"

WORKDIR /root
RUN apt-get update
RUN apt-get install openssl libtool autoconf automake uuid-dev build-essential gcc g++ python-software-properties unzip make git libcap2-bin vim curl wget sudo screen -y
RUN /bin/bash -c 'bash <(curl https://raw.githubusercontent.com/Luphia/SIMPLE/master/shell/install-env.sh -kL)'
RUN useradd ubuntu -ms /bin/bash
RUN tmppw=$(date +%s | sha256sum | base64 | head -c 32 ; echo) && echo "ubuntu:${tmppw}" | chpasswd
RUN adduser ubuntu sudo
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
USER ubuntu
WORKDIR /home/ubuntu
RUN git clone https://github.com/BOLT-Protocol/gringotts
WORKDIR /home/ubuntu/gringotts
RUN git checkout v0.2.1

CMD /bin/bash
