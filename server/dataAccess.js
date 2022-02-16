const fs = require('fs')
const express = require('express')

const jsonString = fs.readFileSync("./database.json")
const dbData = JSON.parse(jsonString)

const soData = dbData.Standorte
const szData = dbData.Sitzungszimmer

console.log(Sitzungszimmer)
