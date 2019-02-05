#!/bin/bash

mongod --port 27019 \
       --dbpath ./db2 \
       --logpath log2/mongod.log \
       --replSet 'rs0' \
       --bind_ip localhost

