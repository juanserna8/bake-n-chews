const express = require('express')

const bodyparser = require('body-parser')

const stripe = require('stripe')('sk_test_51La6UQAH1T8Fy7RTOHXwVc3c4t3Hj49fafPDYMtdQKWQ4eqhl1KPjAARKo3WDhB33jjRKk1zL5JT5ZszIcnuSRfK00XGVGMtIa')

const uuid = require('uuid').v4

const cors = require('cors')

const app = express()

app.use(cors())

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

const PORT = process.env.PORT || 5000

app.post('/checkout', async (req, res) => {
    console.log(req.body)

    let error, status
    
    try{
      const {stripeProducts, token} = req.body

      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
      })

      const key = uuid()

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
        // {
        //     key,
        // }
        );

    console.log("Charge:", { charge }, "Name", stripeProducts.description)
    status = "success"

    } catch (error) {
        console.log('error', error)
        status = "failure"
    }

    res.json({ error, status });
})

app.listen(PORT, () => {
    console.log('App is listening on Port 5000')
})