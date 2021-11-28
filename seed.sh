#!/bin/bash

moonloopd tx moonloop create-collection "bulldogs" "The Sleeping Bulldogs" "The collection of sleeping bulldogs is the first of its kind from Lynn Duke" "" --from lynn --yes
moonloopd tx moonloop create-class "bulldogs" "english" "Butterbean" "The one and only bubby." "" "" "" 1 --from lynn --yes
moonloopd tx moonloop create-class "bulldogs" "french" "Cheech" "The one and only cheech." "" "" "" 2 --from lynn --yes

moonloopd tx moonloop create-powerup-template "bulldogs" "english" "wakeup" "Wakeup" "Let's wake up the cute little guy. 10 power will do the trick." 0 10upower 1000upower 10 30 60 100 1 1upower 1upower 0 "" --from lynn --yes

moonloopd tx moonloop create-mint-strategy "bulldogs.mint.strategy" "[bech32,bech32]" 0,5,10 10,20,30 false --from lynn --yes
moonloopd tx moonloop set-collection-mint-strategy "bulldogs" "bulldogs.mint.strategy" --from lynn --yes

moonloopd tx moonloop mint "bulldogs" "english" 1 --from lynn --yes
moonloopd tx moonloop mint "bulldogs" "french" 2 --from lynn --yes



