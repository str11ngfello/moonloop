#!/bin/bash

starport-develop scaffold map collection name:string description:string mintStrategy:string classes:strings
starport-develop scaffold map class name:string description:string mintStrategy:string gltfHash:string metadata:string maxInstances:int count:int powerupTemplates:strings --index collectionIndex,classIndex
starport-develop scaffold map mintStrategy minters:strings instanceLevels:ints priceLevels:ints paused:bool
starport-develop scaffold map contribution contributors:strings amounts:coins --index collectionIndex,classIndex,powerupTemplateIndex,instanceIndex
starport-develop scaffold map powerupTemplate name description count:int activationBalance:coin maxBalance:coin duration:int maxDuration:int refundDuration:int maxActivations:int coolDownDuration:int rechargeRate:coin feeRate:coin activationType:int eventData:string --index collectionIndex,classIndex,powerupTemplateIndex
starport-develop scaffold map powerup balance:coin startTime:int endTime:int numActivations:int fees:coin acceptingPower:bool --index collectionIndex,classIndex,powerupTemplateIndex,instanceIndex
starport-develop scaffold message setCollectionMintStrategy collectionIndex:string mintStrategyIndex:string
starport-develop scaffold message sendPower collectionIndex:string classIndex:string powerupTemplateIndex:string instanceIndex:string power:coin
starport-develop scaffold message freePower collectionIndex:string classIndex:string powerupTemplateIndex:string instanceIndex:string
starport-develop scaffold message mint collectionIndex:string classIndex:string numInstances:int
starport-develop scaffold query get-instance collectionIndex classIndex instanceIndex --response class
