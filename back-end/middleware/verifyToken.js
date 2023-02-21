const jwt = require('jsonwebtoken')
exports.verifyToken = (req,res, next) => {
    const Authorization = req.header('authorization')
    if(!Authorization){
        const err = new Error('Unauthorized!');
        err.statusCode = 400
        return next(err)
    }

    const token = Authorization.replace('Bearer', '')
    const {userId} = jwt.verify(token, process.env.APP_SECRET)
    req.user = {userId}
    next()
}