const fs = require('fs')
const express = require('express')
const jsonString = fs.readFileSync("./database.json", "utf-8")
let dbData = JSON.parse(jsonString)

const soData = dbData.Standorte
const szData = dbData.Sitzungszimmer

<<<<<<< HEAD
console.log(Sitzungszimmer)
=======
const Sitzungszimmer = {
    Standorte: soData,
    Stockwerke: swData
}

const Sitzungszimmer01 = {
    Standorte: Sitzungszimmer.Standorte[0],
    Stockwerke: Sitzungszimmer.Stockwerke[2]
}

const Sitzungszimmer02 = {
    Standorte: Sitzungszimmer.Standorte[1],
    Stockwerke: Sitzungszimmer.Stockwerke[3]
}

const Sitzungszimmer03 = {
    Standorte: Sitzungszimmer.Standorte[0],
    Stockwerke: Sitzungszimmer.Stockwerke[4]
}

const Sitzungszimmer04 = {
    Standorte: Sitzungszimmer.Standorte[0],
    Stockwerke: Sitzungszimmer.Stockwerke[0]
}

dbData.Sitzungszimmer = [{Sitzungszimmer01, Sitzungszimmer02, Sitzungszimmer03, Sitzungszimmer04}]

fs.writeFileSync("./database.json", JSON.stringify(dbData), (err) =>{
 if(err){
     console.log('no')
 }else{
     console.log('yes')
 }
})
>>>>>>> 2371c0a97e0c4fbd19ea8e55716a9902e8b32050
