#!/bin/bash

cd /home/ubuntu/app0/
npm install
npm rebuild
npm run build
npm run server
