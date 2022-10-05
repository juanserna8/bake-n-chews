const AWS = require('aws-sdk');
const SES = new AWS.SES({ region: "us-east-1" });
var fs = require('fs');
var Handlebars = require('handlebars');

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
                    Data: `The customer ${parsedBody.firstName} ${parsedBody.lastName} with email address ${parsedBody.email} and phone number ${parsedBody.phone} left the following message: ${parsedBody.message}. The customer wishes to receive a ${parsedBody.flavour} cake with ${parsedBody.portions} portions on ${parsedBody.date}`
                },
                Html: {
                    Data: `<html><head><title>Your request</title><style>*{margin:0; padding:0; box-sizing:border-box;} header{position:relative; height:65px; background-color:#FAF4EB; text-align:center; padding-top:8px;} div{margin:0; position:absolute; top:50%; left:50%; transform: translate(-50%, -50%);} h1{font-size:1.5rem;} main{margin-top:8px; padding-top:8px;} footer{margin-top:8px; height:75px; background-color:#FAF4EB; text-align:center; padding-top:8px; padding-bottom:8px;}</style></head><body><header><div><h1>Thanks for your message</h1></div></header><main><br/><h2><strong>Hello ${parsedBody.firstName},</strong></h2><br/>We are processing your request, it might take up to 3 business days. We appreciate your patience. <br /> Meanwhile, you can check your request details: <br />You whish to have a <strong> ${parsedBody.flavour} cake </strong> with ${parsedBody.portions} portions for <strong>${parsedBody.date}</strong>.<br/>So far, the details that we have collected from you are: '${parsedBody.message}.' <br /><br/><p>If you have further details or questions, please send an email to <strong>info@theevercake.com</strong>. <br/></main><footer>The Ever Cake <br/>Copyright 2022<br/>Contact us: 0420449531</footer></body></html>`
                }
            },
            Subject: {
                Data: 'Your order'
            }, 
        },
        Source: "sernadominguezj@gmail.com"
    };

    const params2 = {
        Destination: {
            ToAddresses: ['sernadominguezj@gmail.com'],
        },
        Message: {
            Body: {
                Text: {
                    Data: `The customer ${parsedBody.firstName} ${parsedBody.lastName} with email address ${parsedBody.email} and phone number ${parsedBody.phone} left the following message: ${parsedBody.message}. The customer wishes to receive a ${parsedBody.flavour} cake with ${parsedBody.portions} portions on ${parsedBody.date}`
                },
                Html: {
                    Data: `<html><head><title>Your request</title><style>*{margin:0; padding:0; box-sizing:border-box;} header{position:relative; height:65px; background-color:#FAF4EB; text-align:center; padding-top:8px;} div{margin:0; position:absolute; top:50%; left:50%; transform: translate(-50%, -50%);} h1{font-size:1.5rem;} main{margin-top:8px; padding-top:8px;} footer{margin-top:8px; height:75px; background-color:#FAF4EB; text-align:center; padding-top:8px; padding-bottom:8px;}</style></head><body><header><div><h1>You have received a new message</h1></div></header><main><br/><h2><strong>Hello Andrea,</strong></h2><br/>The customer ${parsedBody.firstName} ${parsedBody.lastName} with email address ${parsedBody.email} and phone number ${parsedBody.phone} left the following message: ${parsedBody.message}.  <br /> The customer wishes to receive a ${parsedBody.flavour} cake with ${parsedBody.portions} portions on ${parsedBody.date}.<br/></main><footer>The Ever Cake <br/>Copyright 2022<br/>Contact us: 0420449531</footer></body></html>`
                }
            },
            Subject: {
                Data: 'New request for The Ever Cake'
            }, 
        },
        Source: "sernadominguezj@gmail.com"
    };

    try {
        const result = await SES.sendEmail(params).promise();
        const result2 = await SES.sendEmail(params2).promise();
        console.log(result, result2)
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
};
