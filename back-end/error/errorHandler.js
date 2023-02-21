exports.errorHandler = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500

    // duplication data
    if(error.code === 11000){
        error.statusCode = 400
        for(let p in error.keyValue){
            error.message = `${p} have to be unique`
        }
    }
    //Object Id not found
    if(error.kind === "ObjectId"){
        error.statusCode = 404
        error.message = `the ${req.originalUrl} is not found bc wrong id`
    }
    // Validation
    if(error.errors){
        error.statusCode = 400
        error.message = []
        for(let p in error.errors){
            error.message.push(error.errors[p].properties.message)
        }
    }
    res.status(error.statusCode).json({
        status: 'fail',
        message: error.message
    })
}