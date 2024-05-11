## This project is simple poc of log monitoring

## openstreetmap is great open source geo provider thanks a lot to openstreetmap team

### To install and connect with cassandra

## 1. install jdk
1. sudo apt update
2. sudo apt install openjdk-8-jdk-y

## 2. install apt-transport https package
1. sudo apt install apt-transport-https

## to remove duplicate entry of cassandra.source
sudo nano /etc/apt/sources.list.d/cassandra.sources.list

should be only 1.

## Add the apache cassandra repositry to your system's sources list and import the GPG key
1. curl -L https://downloads.apache.org/cassandra/KEYS | sudo tee /etc/apt/keyrings/apache-cassandra.asc > /dev/null

2. sudo mkdir -p /etc/apt/keyrings/
3. sudo chmod 755 /etc/apt/keyrings/

## After adding key updating repositry adding the repository and updating your package lists

1. echo "deb [signed-by=/etc/apt/keyrings/apache-cassandra.asc] https://debian.cassandra.apache.org 41x main" | sudo tee -a /etc/apt/sources.list.d/cassandra.sources.list
sudo apt update


## adding cassandra key to server
1. sudo curl -o /etc/apt/keyrings/apache-cassandra.asc https://downloads.apache.org/cassandra/KEYS


## update 
1. sudo apt-get update

## Install cassandra
1. sudo apt-get install cassandra 


## start cassandra service
1. sudo service cassandra start
2. sudo service cassandra status




## If you face AppArmor issue on mysql:
1. sudo snap connect mysql-workbench-community:password-manager-service :password-manager-service