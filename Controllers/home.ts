import express = require('express');

 const homeFunctionRoute = async (requestObject: express.Request, responseObject: express.Response, next: express.NextFunction) => {
    console.log(requestObject.query.firstname)
    const firstname = requestObject.query.firstname
    responseObject.status(200).send({
        "hey": `What's your surname name ` + firstname
    });

   return await next();
}



export {homeFunctionRoute}