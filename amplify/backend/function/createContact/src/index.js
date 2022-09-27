const AWS = require('aws-sdk');
const SES = new AWS.SES({ region: "us-east-1" });

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const parsedBody = JSON.parse(event.body)

    const params = {
        Destination: {
            ToAddresses: ['sernadominguezj@gmail.com'],
        },
        Message: {
            Body: {
                Text: {
                    Data: `The customer ${parsedBody.firstName} ${parsedBody.lastName} with email address ${parsedBody.email} and phone number ${parsedBody.phone} left the following message: ${parsedBody.message}. The customer wishes to receive a ${parsedBody.flavour} cake with ${parsedBody.portions} portions on ${parsedBody.date}`
                }
            },
            Subject: {
                Data: 'Your order'
            }, 
        },
        Source: "sernadominguezj@gmail.com"
    };

    // return SES.sendEmail(params).promise()
    // console.log(params)
    try {
        const result = await SES.sendEmail(params).promise();
        console.log(result)
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            }, 
            body: JSON.stringify({status: 200})
        }
    } catch (e) {
        console.error(e);
        return {
            statusCode: 400,
            body: 'Sending failed'
        }
    }


    // return {
    //     statusCode: 200,
    // //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
    //     body: JSON.stringify('Hello from Lambda!'),
    // };
};
