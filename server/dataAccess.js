const fs = require('fs')
const express = require('express')

const jsonString = fs.readFileSync("./database.json")
const dbData = JSON.parse(jsonString)

const soData = dbData.Standorte
const swData = dbData.Stockwerke

const Sitzungszimmer = {
    Standorte: soData,
    Stockwerke: swData
}

console.log(Sitzungszimmer)