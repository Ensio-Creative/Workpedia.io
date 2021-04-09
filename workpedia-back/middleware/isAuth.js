const { checkToken } = require('../utils/jwt')

function authMiddleware(req, res, next) {
  const token = req.headers.authorization.split(' ')[1]
  console.log(token)
  const isValid = checkToken(token)
  console.log(isValid)
  try {
    if (isValid) {
      req.userId = isValid.userId
      req.isAdmin = isValid.isAdmin
      return next()
    }
    res.status(401).send('Not Authorized')
  } catch(err) {
    res.status(401).send('Invalid Token')
  }
}

module.exports = authMiddleware