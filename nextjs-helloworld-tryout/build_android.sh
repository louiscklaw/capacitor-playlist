#!/usr/bin/env bash

set -ex

export ANDROID_SDK_ROOT=$HOME/Android/Sdk

npx cap sync

npx native-run android --sdk-info       
npx cap open android