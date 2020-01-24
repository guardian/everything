#!/usr/bin/env bash

SCRIPT_PATH=$( cd $(dirname $0) ; pwd -P )
docker-compose -f "${SCRIPT_PATH}/../docker-compose.yaml" up -d