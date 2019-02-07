#!/bin/bash

mkdir -p ./db2
mkdir -p ./log2

rsset="--replSet=rs0"
#rsset=""

mongod --port 27019 \
       --dbpath ./db2 \
       --logpath log2/mongod.log \
       --bind_ip localhost \
       ${rsset}

