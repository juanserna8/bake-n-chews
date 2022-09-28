const stripe = require('stripe')('sk_test_51La6UQAH1T8Fy7RTOHXwVc3c4t3Hj49fafPDYMtdQKWQ4eqhl1KPjAARKo3WDhB33jjRKk1zL5JT5ZszIcnuSRfK00XGVGMtIa')
const AWS = require('aws-sdk');
const SES = new AWS.SES({ region: "us-east-1" });

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    
    console.log(event.body)

    let error, status
    
    try{
      const {stripeProducts, token, date} = JSON.parse(event.body)

      console.log('Try token', token)

      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
      })

      const charge = await stripe.charges.create({
        amount: Math.round((stripeProducts.price + Number.EPSILON) * 100),
        currency: "aud",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${stripeProducts.description}`,
        shipping: {
            name: token.card.name,
            address: {
                line1: token.card.address_line1,
                line2: token.card.address_line2,
                city: token.card.address_city,
                country: token.card.address_country,
                postal_code: token.card.address_zip
            },
        },
        },
        );
        
        const params = {
            Destination: {
                ToAddresses: [token.email],
            },
            Message: {
                Body: {
                    Text: {
                        Data: `Your order ${stripeProducts.description} has been processed. ${date}`
                    }
                },
                Subject: {
                    Data: 'Order confirmation'
                }, 
            },
            Source: "sernadominguezj@gmail.com"
        };

    console.log("Charge:", { charge }, "Name", stripeProducts.description)
    status = "success"

    const result = await SES.sendEmail(params).promise();
    console.log(result)

    } catch (error) {
        console.log('error', error)
        status = "failure"
    }

    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "*"
     }, 
        body: JSON.stringify({status: 200}),
    };
};
