module.exports = function auth(req, res, next) {
    if (req.session.isAuth === false) {
      req.session.retUrl = req.originalUrl;
     
    }
  
    next();
  }