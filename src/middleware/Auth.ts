import { Response, Request, NextFunction } from 'express'

export default function Auth(req: Request, res: Response, next: NextFunction) {
    console.log("Your middleware is working!");

    // If you want to pass the control
    // to the next middleware function
    next();
}