import  CustomError  from '../errors/customError.js' 
import {StatusCodes} from 'http-status-codes'

export const errorHandler = (err, req, res, next) => { 
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    else {
        return next(res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Something went wrong" }))
    }
}