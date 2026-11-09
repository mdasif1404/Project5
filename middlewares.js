import jwt from 'jsonwebtoken';

export const logger = (req, res, next)=>{
    console.log(`URL: ${req.url}\nMETHOD: ${req.method}`);
    next()
}

export const authenticateUser = (req, res, next)=>{
    console.log(req.headers.authorization.split(" ")[1]);
    const token = req.headers.authorization.split(" ")[1];
    
    const decoded = jwt.verify(token, "ABCDE");
    // console.log(decoded);

    req.user = decoded
    console.log(req.user);
    
    
    next()
}