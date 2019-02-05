#!/bin/bash

mongod --port 27017 \
       --dbpath ./db \
       --logpath log/mongod.log \
       --replSet 'rs0'
       --bind_ip localhost

