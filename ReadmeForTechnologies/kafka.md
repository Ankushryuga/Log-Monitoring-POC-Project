## Kafka is used for real time data streaming
Kafka has high throughput(Throughput is amount of data passing through), but storage is temporary.

## Database have low throughput, but storage is high..

## KAFKA TERMINOLOGIES:
Producer: Data is coming from, there might be any producers.
Consumer: Data is being received and using.
Topic: it's a logical partitioning of messages.
Partition: it's for dividing the data, partition work on index

## Kafka->Topics->Partitioning

## 1 consumer can select multiple partition
## but multiple consumer can't select 1 partition, to solve this issue we have consumer group

## CONSUMER GROUP
when we create a consumer, by default they will be in consumer group.

## Queue
one producer one consumer

## PUB/SUB
one producer multiple consumers

## Zookeeper
Its a tool kafka use it internally.

## Default port of kafka is 9092.

## ADMIN: make topics and all
## Producer: produce result
