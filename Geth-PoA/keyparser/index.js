const fs = require('fs');
const path = require('path');
const keythereum = require('keythereum');

const folder = '/home/ubuntu/keystore';
const list = fs.readdirSync(folder);
const pw1 = fs.readfileSync('./keypw1').toString();
const pw2 = fs.readfileSync('./keypw2').toString();
const pw3 = fs.readfileSync('./keypw3').toString();
const ks1 = JSON.parse(fs.readfileSync(path.join(folder, list[0])));
const ks2 = JSON.parse(fs.readfileSync(path.join(folder, list[1])));
const ks3 = JSON.parse(fs.readfileSync(path.join(folder, list[2])));
console.log(pw1);
console.log(ks1);
