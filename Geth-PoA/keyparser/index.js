const fs = require('fs');
const path = require('path');
const keythereum = require('keythereum');

const folder = '/home/ubuntu/keystore';
const list = fs.readdirSync(folder);
const pw = fs.readFileSync('./keypw').toString().trim();
const ks1 = JSON.parse(fs.readFileSync(path.join(folder, list[0])));
const ks2 = JSON.parse(fs.readFileSync(path.join(folder, list[1])));
const ks3 = JSON.parse(fs.readFileSync(path.join(folder, list[2])));
const pk1 = keythereum.recover(pw, ks1).toString('hex');
const pk2 = keythereum.recover(pw, ks2).toString('hex');
const pk3 = keythereum.recover(pw, ks3).toString('hex');
fs.writeFileSync('/home/ubuntu/shares/pk1', pk1);
fs.writeFileSync('/home/ubuntu/shares/pk2', pk2);
fs.writeFileSync('/home/ubuntu/shares/pk3', pk3);