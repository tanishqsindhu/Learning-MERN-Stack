class ExpressError extends Error{
    constructor(message,statusCode){
        super()
        this.message=message;
        this.StatusCode=statusCode;
    }
}

module.exports = ExpressError;