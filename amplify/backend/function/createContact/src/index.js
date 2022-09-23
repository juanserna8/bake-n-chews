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
            ToAddresses: [parsedBody.email],
        },
        Message: {
            Body: {
                Text: {
                    Data: parsedBody.message
                }
            },
            Subject: {
                Data: 'Your order'
            }, 
        },
        Source: "sernadominguezj@gmail.com"
    };

    return SES.sendEmail(params).promise()
    console.log(params)
    // try {
    //     const result = await SES.sendEmail(params).promise();
    //     console.log(result)
    //     return {
    //         statusCode: 200,
    //         body: 'Email sent!'
    //     }
    // } catch (e) {
    //     console.error(e);
    //     return {
    //         statusCode: 400,
    //         body: 'Sending failed'
    //     }
    // }


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
