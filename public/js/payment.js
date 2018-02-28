//npm require dwolla/connect dwolla

//user needs to sign up
//user gets oauth token

const dwolla = require('dwolla-v2');

// Navigate to https://www.dwolla.com/applications (production) or https://dashboard-sandbox.dwolla.com/applications (Sandbox) for your application key and secret.
const appKey = 'L8EPkSZvL0tmywilYxb4nVhwsw0Sa5n2i1kitiusFAZxm0V9ji';
const appSecret = 'Xv6Gs40sdfIhLvx0j9nnTkTxy6PQlLVFzaA6040HjnfnZIPIMN';
const client = new dwolla.Client({
  key: appKey,
  secret: appSecret,
  environment: 'sandbox' // optional - defaults to production
});

// create a token
client.auth.client()
  .then(appToken => appToken.get('customers', { limit: 10 }))
  .then(res => console.log(res.body));

//refresh auth token


// lbJ5AxEPCJfdryXj2ZDmrClmrCF24V0NfTcCWnvSekBOpFf3Wx
//we put token in user database
//user misses chore & creates a payment with other roommates
//user transfers money to other roomates
//roommates recieve money



// SELLER

// var requestBody = {
//   firstName: 'Jane',
//   lastName: 'Merchant',
//   email: 'janeMerchant@email.com',
//   type: 'business',
//   address1: '99-99 33rd St',
//   city: 'Some City',
//   state: 'NY',
//   postalCode: '11101',
//   dateOfBirth: '1970-01-01',
//   ssn: '1234',
//   businessClassification: '9ed38155-7d6f-11e3-83c3-5404a6144203',
//   businessType: 'llc',
//   businessName: 'Jane Corp',
//   ein: '12-3456789'
// };

// appToken
//   .post('customers', requestBody)
//   .then(res => res.headers.get('location')); // => 'https://api-sandbox.dwolla.com/customers/AB443D36-3757-44C1-A1B4-29727FB3111C'

// RECEIVING ACCOUNT

// var customerUrl = 'https://api-sandbox.dwolla.com/customers/AB443D36-3757-44C1-A1B4-29727FB3111C';
// var requestBody = {
//   'routingNumber': '222222226',
//   'accountNumber': '123456789',
//   'bankAccountType': 'checking',
//   'name': 'Jane Merchant'
// };

// appToken
//   .post(`${customerUrl}/funding-sources`, requestBody)
//   .then(res => res.headers.get('location')); // => 'https://api-sandbox.dwolla.com/funding-sources/375c6781-2a17-476c-84f7-db7d2f6ffb31'


// UNVERIFIED CUSTOMER

// var requestBody = {
//   firstName: 'Joe',
//   lastName: 'Buyer',
//   email: 'jbuyer@mail.net',
//   ipAddress: '99.99.99.99'
// };

// appToken
//   .post('customers', requestBody)
//   .then(res => res.headers.get('location')); // => 'https://api-sandbox.dwolla.com/customers/247B1BD8-F5A0-4B71-A898-F62F67B8AE1C'

// ===============================================


// Using dwolla-v2 - https://github.com/Dwolla/dwolla-v2-node
// var customerUrl = 'https://api-sandbox.dwolla.com/customers/247B1BD8-F5A0-4B71-A898-F62F67B8AE1C';

// appToken
//   .post(`${customerUrl}/iav-token`)
//   .then(res => res.body.token); // => 'lr0Ax1zwIpeXXt8sJDiVXjPbwEeGO6QKFWBIaKvnFG0Sm2j7vL'


// ===============================================



// var requestBody = {
//   _links: {
//     source: {
//       href: 'https://api-sandbox.dwolla.com/funding-sources/80275e83-1f9d-4bf7-8816-2ddcd5ffc197'
//     },
//     destination: {
//       href: 'https://api-sandbox.dwolla.com/funding-sources/375c6781-2a17-476c-84f7-db7d2f6ffb31'
//     }
//   },
//   amount: {
//     currency: 'USD',
//     value: '225.00'
//   }
// };

// For Dwolla API applications, an appToken can be used for this endpoint. (https://docsv2.dwolla.com/#application-authorization)
// appToken
//   .post('transfers', requestBody)
//   .then(res => res.headers.get('location')); // => 'https://api.dwolla.com/transfers/d76265cd-0951-e511-80da-0aa34a9b2388'


// REQUEST AND RESPONSE

// var transferUrl = 'https://api.dwolla.com/transfers/d76265cd-0951-e511-80da-0aa34a9b2388';

// For Dwolla API applications, an appToken can be used for this endpoint. (https://docsv2.dwolla.com/#application-authorization)
// appToken
//   .get(transferUrl)
//   .then(res => res.body.status); // => 'pending'




