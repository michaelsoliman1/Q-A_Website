#!/bin/bash

cd /home/ubuntu/app0/
npm install
npm rebuild
npm run build:client
chmod +x server/server.js
sudo systemctl restart server

