import { faker } from '@faker-js/faker/locale/ru';

import express from 'express';
const app = express();

const host = '127.0.0.1'
const port = 3000

function generator() {

  let users = []

  for (let i=0; i < 100; i++) {

    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let city = faker.address.city();
    let street = faker.address.street();
    let bnum =  faker.address.buildingNumber();
    let sadr = faker.address.secondaryAddress();
    let car = faker.vehicle.vehicle();
    let telephone = faker.phone.number('+7-###-###-##-##');

    users.push({
        "userid": i,
        "first_name": firstName,
        "last_name": lastName,
        "adress": {
          "city": city,
          "street" : street,
          "bnumber" : bnum,
          "sadress" : sadr
        },
        "car": car,
        "telephone": telephone
    });
  }

  return { "data": users }
}

app.get('/user', (req, res) => {
  res.status(200).type('text/plain')
  res.send(JSON.stringify(generator(), null, '\t'))
})

app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`)
})