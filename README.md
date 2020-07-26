# <img src="https://github.com/pip-services/pip-services/raw/master/design/Logo.png" alt="Pip.Services Logo" style="max-width:30%"> <br/> Payments Microservice Client SDK for Node.js

This is a Node.js client SDK for [pip-services-payments-node](https://github.com/pip-services/pip-services-payments-node) microservice.
It provides an easy to use abstraction over communication protocols:

* Direct client
* HTTP client
* Seneca client (see http://www.senecajs.org)

<a name="links"></a> Quick Links:

* [Development Guide](doc/Development.md)
* [API Version 1](doc/NodeClientApiV1.md)

## Install

Add dependency to the client SDK into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "pip-clients-payments-node": "^1.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Inside your code get the reference to the client SDK
```javascript
var sdk = new require('pip-clients-payments-node');
```

Define client configuration parameters that match configuration of the microservice external API
```javascript
// Client configuration
var config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
var client = sdk.PaymentsHttpClientV1(config);

// Connect to the microservice
client.open(null, function(err) {
    if (err) {
        console.error('Connection to the microservice failed');
        console.error(err);
        return;
    }
    
    // Work with the microservice
    ...
});
```

Now the client is ready to perform operations
```javascript
// Make payment
var order = {
    id: '1',
    currency_code: 'USD',
    total: 100,
    items: [
        {
            name: 'product 1',
            description: 'description for product 1',
            amount: 80,
            amount_currency: 'USD',
            category: 'category 1',
            quantity: 1
        },
        {
            name: 'product 2',
            description: 'description for product 2',
            amount: 20,
            amount_currency: 'USD',
            category: 'category 2',
            quantity: 1
        }
    ]
};

client.makePayment(
    null,
    'stripe',
    {   // account
        access_key: STRIPE_ACCESS_KEY
    },
    {   // buyer
        id: '2',
        name: 'Steve Jobs',
    },
    order,
    {   // payment method
        id: PAYMENT_METHOD_ID,
        type: 'card'
    },
    order.total,
    order.currency_code,
    function(err, payment) => {
        if (payment.status == PaymentStatusV1.Confirmed) {
        // ... payment processed successfully
        }
    }
);
```

```javascript
// Refund confirmed payment
client.refundPayment(
    null,
    'stripe',
    {   // account
        access_key: STRIPE_ACCESS_KEY
    },
    payment.id,
    function(err, payment) {
        if (payment.status == PaymentStatusV1.Canceled) {
        // ... payment refunded successfully
        }
        ...    
});
```    

## Acknowledgements

This client SDK was created and currently maintained by *Sergey Seroukhov*.

