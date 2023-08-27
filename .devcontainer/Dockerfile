# syntax=docker/dockerfile:1.4
FROM ubuntu:22.04

ARG username=vscode
ARG useruid=1000
ARG usergid=${useruid}

RUN <<-EOF
	#!/bin/bash

	# install commons
	apt-get update
	apt-get install -y --no-install-recommends sudo curl ca-certificates lsb-release git ssh

	## install docker
	cat <<-EOS > /etc/apt/sources.list.d/docker.sources
		Types: deb
		URIs: https://download.docker.com/linux/ubuntu
		Suites: $(lsb_release -cs)
		Components: stable
		Architectures: $(dpkg --print-architecture)
		Signed-By: 
	EOS
	curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sed "s/^/ /" >> /etc/apt/sources.list.d/docker.sources
	apt-get update
	apt-get install -y --no-install-recommends docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

	# create user
	groupadd --gid ${usergid} ${username}
	useradd -s /bin/bash --uid ${useruid} --gid ${usergid} -m ${username}
	echo ${username} ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/${username}
	chmod 0440 /etc/sudoers.d/${username}
	usermod -aG docker vscode

	# install for the frontend
	## node.js v18
	curl -fsSL https://deb.nodesource.com/setup_18.x | bash
	apt-get install -y --no-install-recommends nodejs

	## yarn
	npm i -g yarn

	# install for the backend
	## none

	# apt cache clean
	apt-get clean
	rm -rf /var/lib/apt/lists/*
EOF