var dwolla = require('dwolla-v2');
var client = new dwolla.Client({id: "L8EPkSZvL0tmywilYxb4nVhwsw0Sa5n2i1kitiusFAZxm0V9ji", secret: "Xv6Gs40sdfIhLvx0j9nnTkTxy6PQlLVFzaA6040HjnfnZIPIMN"});
var appToken = new client.Token({access_token: "41GYirFT8CpjS7lj0qhLYgscAJ7KqYDYTaXUgXlHUTkNCVSjiZ"});

var requestBody = {
  _links: {
    source: {
      href: 'https://api-sandbox.dwolla.com/funding-sources/b79acadf-560c-4b1d-b919-e07e5f394cbe'
    },
    destination: {
      href: 'https://api-sandbox.dwolla.com/funding-sources/2fa64102-185d-443d-9001-dda9bc37651d'
    }
  },
  amount: {
    currency: 'USD',
    value: '1.00'
  }
};

appToken
  .post('transfers', requestBody)
  .then(function(res) {
    res.headers.get('location'); // => 'https://api-sandbox.dwolla.com/transfers/74c9129b-d14a-e511-80da-0aa34a9b2388'
  });

  var requestBody = {
    firstName: 'Jane',
    lastName: 'Merchant',
    email: 'janeMerchant@email.com',
    type: 'personal',
    address1: '99-99 33rd St',
    city: 'Some City',
    state: 'NY',
    postalCode: '11101',
    dateOfBirth: '1970-01-01',
    ssn: '1234',
  };
  
  appToken
    .post('customers', requestBody)
    .then(res => res.headers.get('location')); // => 'https://api-sandbox.dwolla.com/customers/AB443D36-3757-44C1-A1B4-29727FB3111C'
  
// Using dwolla-v2 - https://github.com/Dwolla/dwolla-v2-node
var customerUrl = 'https://api-sandbox.dwolla.com/customers/247B1BD8-F5A0-4B71-A898-F62F67B8AE1C';

appToken
  .post(`${customerUrl}/iav-token`)
  .then(res => res.body.token); // => 'lr0Ax1zwIpeXXt8sJDiVXjPbwEeGO6QKFWBIaKvnFG0Sm2j7vL'
