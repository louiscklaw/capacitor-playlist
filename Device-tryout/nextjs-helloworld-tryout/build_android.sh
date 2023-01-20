#!/usr/bin/env bash

set -ex

export ANDROID_SDK_ROOT=$HOME/Android/Sdk

# from readme
npm run build
npm run export


npx cap sync

npx native-run android --sdk-info       

npx cap open android
# npx cap run android