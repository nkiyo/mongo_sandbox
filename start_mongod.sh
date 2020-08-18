#!/bin/bash

mkdir -p ./db
mkdir -p ./log

rsset="--replSet=rs0"
#rsset=""

mongod --port 27017 \
       --dbpath ./db \
       --logpath log/mongod.log \
       --bind_ip localhost \
       ${rsset}

