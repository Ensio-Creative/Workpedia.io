var jwt = require('jsonwebtoken')

const secret = 'workpedia'
const header = {
  typ: 'JWT',
  alg: 'HS512'
}

function generateToken(userId, isVerified, isAdmin) {
  const data = {
    userId,
    isVerified,
    isAdmin
  }

  return jwt.sign({ data }, secret, { expiresIn: '30d' })
}

function decodeToken(token) {
  return jwt.verify(token, secret)
}

function checkToken(token) {
  let decodedToken
  try {
    decodeToken = jwt.verify(token, secret)
    return decodeToken
  } catch (err) {
    return false
  }
}

module.exports = { generateToken, decodeToken, checkToken }