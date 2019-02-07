#!/bin/bash

mkdir ./db1
mkdir ./log1

#rsset="--replSet 'rs0'"
rsset=""

mongod --port 27018 \
       --dbpath ./db1 \
       --logpath log1/mongod.log \
       --bind_ip localhost \
       ${rsset}

