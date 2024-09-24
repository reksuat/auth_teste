function check_token(req, res, next) {
  const auth_header = req.headers["authorization"];
  const token = auth_header && auth_header.split(" ")[1];

  if (!token) {
    return res.status(401).json("Acesso negado");
  }

  try {
    const secret = process.env.SECRET;
    jwt.verify(token, secret);
    next();
  } catch (error) {
    res.status(400).send("Token inválido");
  }
}


module.exports = check_token