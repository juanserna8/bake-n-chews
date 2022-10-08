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
    // const crearEmail = `<html>Hello Kike</html>`
    
    try{
      const {stripeProducts, token, date, firstName, lastName, phone, products, cartTotalAmount} = JSON.parse(event.body)

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

        let headers = ['Product', 'Quantity', 'Price'];
        // Create the Table Headers with the titles that come from let headers
        let tableTitles = headers.map(head => {
            return `<th>${head}</th>`
        }).join('')
        // Create the table rows comming from products
        let productRows = products.map(product => {
            return `<tr><td>${product.name}</td><td>${product.quantity}</td><td>$${product.price * product.quantity}</td></tr>`
        }).join('')
       
        // Calculate transaction fee 
        const transF = (cartTotalAmount * 0.0175) + 0.3;

        // Calculate the total value to pay
        const totalAmount = cartTotalAmount + transF;
        
        const params = {
            Destination: {
                ToAddresses: [token.email],
            },
            Message: {
                Body: {
                    Text: {
                        Data: `Hello ${firstName}, Your order ${stripeProducts.description} has been processed. ${date}`
                    },
                    Html: {
                        Data: `<html><head><title>Your order</title><style>*{margin:0; padding:0; box-sizing:border-box;} header{height: 65px; background-color:#FAF4EB; text-align:center; padding-top:13px;} div{margin-top: 20px; margin-bottom:20px; margin-left: 10px; margin-right: 10px;} h1{font-size:1.5rem;} table{width:400px;} th{text-align:center;} td{text-align:center;} table,th,td{border:1px solid #000; border-collapse:collapse;} th,td{padding-top: 10px; padding-bottom: 10px;} footer{margin-top:10px; height:75px; background-color:#FAF4EB; text-align:center; padding-top:8px; padding-bottom:8px;}</style></head><body><header><h1>Your order confirmation</h1></header><div><p><strong>Hello ${firstName}, </strong></p><br /> <p>Thanks for shopping with us. Please find below your order details:</p> <br /><table><tr>${tableTitles}</tr>${productRows}<tr><td colspan="2"><strong>Subtotal</strong></td><td>$${cartTotalAmount}</td></tr><tr><td colspan="2"><strong>Transaction fee</strong></td><td>$${transF}</td></tr><tr><td colspan="2"><h2><strong>Total</strong></h2></td><td><strong>$${totalAmount}</strong></td></tr></table> <br /><p>Your order will be delivered on ${date}</p><br /><p>Best regards, The Ever Cake</p></div><footer>The Ever Cake <br/>Copyright 2022<br/>Contact us: 0420449531</footer></body></html>`
                    }
                    // Html: {
                    //     Data: `<html><head><title>Your order</title><style>*{margin:0; padding:0; box-sizing:border-box;} header{height: 65px; background-color:#FAF4EB; text-align:center; padding-top:8px;} main{margin-top:4px; margin-bottom:4px} h1{font-size:1.5rem;} footer{margin-top:8px; height:75px; background-color:#FAF4EB; text-align:center; padding-top:8px; padding-bottom:8px;}</style></head><body><header><h1>Your order confirmation</h1></header><main><h2><strong>Hello ${firstName}, </strong></h2><br /> <p>Thanks for shopping with us. Please find below your order details:</p> <br> <p><strong>Products</strong>${stripeProducts.description}</p><br /><div>${products.map((product, index) => product.name)}</div> <p>Your products will be delivered on ${date}</p><br /> <table><tr>${headers.map(head => <th>{head}</th>)}</tr><tr>${products.map(product => <td>{product.name}</td>)}</tr></table></main><footer>The Ever Cake <br/>Copyright 2022<br/>Contact us: 0420449531</footer></body></html>`
                    // }
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
