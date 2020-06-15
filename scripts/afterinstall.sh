#!/bin/bash

cp /tmp/.env /home/ubuntu/app0
cd /home/ubuntu/app0/
npm install
npm rebuild
npm run build:client
chmod +x server/appserver.js
sudo systemctl restart appserver

