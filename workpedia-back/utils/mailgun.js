var api_key = process.env.MAILGUN_KEY
var domain = process.env.DOMAIN
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain})
 
async function sendEmail(payload) {
  const { code, email } = payload
  var data = {
    from: 'Workpedia <ifeanyichukwuadams@outlook.com>',
    to: email,
    subject: `Verification Code: ${code}`,
    text: `Enter this code: ${code}`
  }

  await mailgun.messages().send(data)
  console.log('message sent')
  return true
}

module.exports = { sendEmail }