FROM ubuntu:trusty

RUN apt-get update \
&& apt-get install --yes --force-yes \
    curl \
    dnsutils \
    httpie \
    iputils-ping \
    jq \
    net-tools \
    telnet \
    vim \
	nmap 
	
RUN locale-gen en_US.UTF-8

ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

