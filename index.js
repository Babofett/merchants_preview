/**
 * Module dependencies.
 */
var cors = require('cors');
var express = require('express');
var app = module.exports = express();

app.use(express.json());

// Create HTTP error

function createError(status, message) {
  var err = new Error(message);
  err.status = status;
  return err;
}

let mockMerchants = [
    {
      "name": "Mama of Africa",
      "address": {
        "street": "Hauptstraße",
        "number": 10,
        "postalCode": "35390",
        "city": "Gießen"
      },
      "category": 1,
      "id": "d3bc94e8-16ca-4d2e-a711-0ee3e1e42856",
      "headerImage": "",
      "icon": "https://mama-africa.net/wp/wp-content/uploads/2017/07/mama-africa-logo-face.jpg",
      "description": "",
      "rating": 4.82
    },
    {
      "name": "Pizzeria Stern",
      "address": {
          "street": "Westanlage",
          "number": 20,
          "postalCode": "35390",
          "city": "Gießen"
      },
      "category": 1,
      "id": "000000-ebe2-4aa6-8572-53aa9550b5c2",
      "headerImage": "",
      "icon": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-pizza-design-template-8329a51d86709c07def8a222d93138ea_screen.jpg",
      "description": "",
      "rating": 3.08
    },
    {
      "name": "Zahnarzt Franke",
      "address": {
          "street": "Goethestraße",
          "number": 4,
          "postalCode": "35398",
          "city": "Gießen"
      },
      "category": 2,
      "id": "b8082774-0000-4aa6-8572-53aa9550b5c2",
      "headerImage": "",
      "icon": "https://t4.ftcdn.net/jpg/03/02/68/11/360_F_302681154_9HOWdvGLtCKpfwO5B85yESszG7MfmlUl.jpg",
      "description": "",
      "rating": 2.45
    },
    {
      "name": "The Barber Shop",
      "address": {
          "street": "Wichernweg",
          "number": 12,
          "postalCode": "35394",
          "city": "Gießen"
      },
      "category": 4,
      "id": "b8082774-ebe2-4aa6-0000-53aa9550b5c2",
      "headerImage": "",
      "icon": "https://i.pinimg.com/originals/04/0e/d9/040ed98defb52539c6ef68703fbde157.png",
      "description": "",
      "rating": 1.9
    },
    {
      "name": "Bowling Valley",
      "address": {
          "street": "Justus-Kilian-Str.",
          "number": 1,
          "postalCode": "35457",
          "city": "Lollar"
      },
      "category": 3,
      "id": "b8082774-ebe2-4aa6-8572-00000550b5c2",
      "headerImage": "",
      "icon": "https://img.freepik.com/vektoren-kostenlos/bowling-logo-etiketten-abzeichen_266639-32.jpg?size=338&ext=jpg",
      "description": "",
      "rating": 3.7
    },
  ]

/**
 * GET index.
 */

app.get('/', function(req, res){
  res.send('Visit /merchants or /merchants/<merchant_id>');
});

/**
 * GET :user.
 */
app.get('/merchants', cors(), function(req,res) {
  res.json(mockMerchants)
})

app.get('/merchants/:merchant_id', function(req, res, next){
  merchant = mockMerchants.find((merchant) => merchant.id == req.params.merchant_id)
  if(merchant) {
    res.json(merchant);
  } else {
    res.status(404).end();
  }
});

app.post('/merchants', function(req,res) {
    console.log(req.body);
    mockMerchants = [...mockMerchants, req.body];
    res.end();
})



if (!module.parent) {
  app.listen(process.env.PORT || 80);
  console.log('Express started on port 3000');
}
