## Redis is an in-memory key-value store known for its flexibility, performance, and wide language support.

## udating apt pachage chache
1. sudo apt update

## Install Redis
1. sudo apt install redis-server

## open redis.conf file 
1. sudo nano /etc/redis/redis.conf

==> inside this file find supervised directive. This directive allows you to declare an init system to manage Redis as a service, provide you more control over its operations. The supervised directive might be set to "no" by default. since i am working on ubuntu, which uses the "systemd" init system, change this to 
1. supervisod systemd

for windows you can find on internet.

## restart redis service.
1. sudo systemctl restart redis.service


## check status
1. sudo systemctl staus redis

## test redis
1. redis-cli
## ping redis
1. 127.0.0.1:6379>ping
o/p: PONG

2. 127.0.0.1:6379> set test "It's working"
o/p: OK
## retrive test:
1. 127.0.0.1:6379> get test


## exit:
1. 127.0.0.1:6379>exit


## FOR RARE CASE::
## In can you are not acces binding to localhost is not done.
## BINDING TO LOCALHOST:


