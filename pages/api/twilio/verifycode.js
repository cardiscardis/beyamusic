const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

export default async function handler(req, res) {
    
   await client
    .verify
    .v2
    .services(process.env.VERIFY_SERVICE_SID)
    .verificationChecks
    .create({
        to: `+${req.query.phonenumber}`,
        code: req.query.code
    })
    .then(data => {
        res.status(200).send(data);
    }).catch((e) => console.log(e))

};