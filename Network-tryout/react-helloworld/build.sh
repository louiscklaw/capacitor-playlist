#!/usr/bin/env bash

set -ex

npm install @capacitor/network
npx cap sync

npm i -D
npm run start