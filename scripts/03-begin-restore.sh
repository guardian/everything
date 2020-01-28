#!/usr/bin/env bash

DOCKER_URL='localhost:9229'

echo 'Configuring snapshot...'
curl -XPUT -H 'Content-Type: application/json' "$DOCKER_URL/_snapshot/capi_backup" -d @- << EOF | jq .
{
  "type": "s3",
  "settings": {
    "bucket": "content-api-es-snapshots",
    "region": "eu-west-1",
    "base_path": "PROD-ZEBRA-live",
    "readonly": true,
    "indices": "content"
  }
}
EOF

sleep 5

echo 'Sending restore command for date: 2020-01-20...'
curl -XPOST "$DOCKER_URL/_snapshot/capi_backup/cluster-2020-01-20-00-00/_restore" | jq .
