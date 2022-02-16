const fs = require('fs')
const express = require('express')

const jsonString = fs.readFileSync("./database.json")
const dbData = JSON.parse(jsonString)

console.log(dbData.Standorte)
