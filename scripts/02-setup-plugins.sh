#!/usr/bin/env bash

CONTAINER_ID=`docker ps -aqf "name=everything_elasticsearch"`

if [ -z "$CONTAINER_ID" ]
then
    echo "no container found, have you run 01-launch.sh?"
else 
    docker exec -it $CONTAINER_ID /usr/share/elasticsearch/bin/elasticsearch-plugin install repository-s3
    docker exec -it $CONTAINER_ID /usr/share/elasticsearch/bin/elasticsearch-keystore add s3.client.default.access_key
    docker exec -it $CONTAINER_ID /usr/share/elasticsearch/bin/elasticsearch-keystore add s3.client.default.secret_key
    docker exec -it $CONTAINER_ID /usr/share/elasticsearch/bin/elasticsearch-keystore add s3.client.default.session_token
    docker restart $CONTAINER_ID
fi