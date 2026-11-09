export const logger = (req, res, next)=>{
    console.log(`URL: ${req.url}\nMETHOD: ${req.method}`);
    next()
}