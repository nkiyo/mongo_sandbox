// secondary側でprimaryのデータを読む前に実行する
db.getMongo().setSlaveOk()
