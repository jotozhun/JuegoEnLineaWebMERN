const jwt = require('jsonwebtoken');

const secret_token = process.env.SECRET_TOKEN;

module.exports = function(req,res,next){
    if(req.path != '/auth/login'){
        if(req.headers.authorization){
            /*let token = req.headers.authorization.split(' ')[1];
            jwt.verify(token,secret_token,function(error,decoded){
                if(error) return res.status(403).send({message: 'No tienes los permisos suficientes para estar aquí...',error});
                if(req.method != 'GET'){
                    if(decoded.role == 'admin') next();
                    else res.status(403).send({message: 'No tienes los permisos suficientes para estar aquí...'});
                }else{
                    next();
                }
            });*/
        }else res.status(403).send({message: 'No tienes los permisos suficientes para estar aquí...'});
    }else next();
}