#!/usr/bin/env bash

rm -rf .next
rm -rf .swc
rm -rf node_modules/*
rm -rf package-lock.json
rm -rf yarn.lock

set -ex

yarn --dev

yarn build
yarn start
