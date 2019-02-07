#!/bin/bash

mkdir ./db2
mkdir ./logs

#rsset="--replSet 'rs0'"
rsset=""

mongod --port 27019 \
       --dbpath ./db2 \
       --logpath log2/mongod.log \
       --bind_ip localhost \
       ${rsset}

