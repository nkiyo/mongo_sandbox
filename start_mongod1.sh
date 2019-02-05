#!/bin/bash

mongod --port 27018 \
       --dbpath ./db1 \
       --logpath log1/mongod.log \
       --replSet 'rs0' \
       --bind_ip localhost

