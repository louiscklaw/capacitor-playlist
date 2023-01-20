#!/usr/bin/env bash

set -ex


yarn add @capacitor/core
yarn add --dev @capacitor/cli

sleep 1

npx cap init

yarn add @capacitor/android 
npx cap add ios

yarn add @capacitor/ios
npx cap add android

sleep 1

npx cap sync

export ANDROID_SDK_ROOT=$HOME/Android/Sdk
