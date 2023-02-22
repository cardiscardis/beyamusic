const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

export default async function handler(req, res) {
   
    await client
        .verify
        .v2
        .services(process.env.VERIFY_SERVICE_SID)
        .verifications
        .create({
            to: `+${req.query.phonenumber}`,
            channel: req.query.channel
        })
        .then(data => {
            //console.log(data)
            res.status(200).send(data);
        }).catch((e) => console.log(e))
    
}