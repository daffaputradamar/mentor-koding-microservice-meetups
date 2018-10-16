function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;

    next();
  } else {
    req.token = "";
    // req.token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmM1ZWRiMWI4ZDg2NzM1ZThlMzdlYjYiLCJpYXQiOjE1Mzk3MzE1OTAsImV4cCI6MTUzOTgxNzk5MH0.F4xoyWSKxtrdmjOlRrnu0oPB_n3y40VbYLd17LNrq2Y";
    next();
  }
}

module.exports = verifyToken;
