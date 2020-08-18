- DB1
  - start: `start_mongo.sh`
  - port: 27017
  - dbpath: ./db
  - log: ./log/mongod.log

- DB2
  - start: `start_mongo1.sh`
  - port: 27018
  - dbpath: ./db1
  - log: ./log1/mongod.log

- DB3
  - start: `start_mongo2.sh`
  - port: 27019
  - dbpath: ./db2
  - log: ./log2/mongod.log

- common
  - replSet: rs0

