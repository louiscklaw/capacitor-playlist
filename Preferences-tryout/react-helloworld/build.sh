#!/usr/bin/env bash

set -ex

npm install @capacitor/preferences
npx cap sync

npm i -D
HTTPS=true npm run start