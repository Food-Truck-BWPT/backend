const jwt = require("jsonwebtoken");
const secrets = require("./secrets.js");

module.exports = {
  generateToken,
};

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    isVendor: user.isVendor,
  };

  const options = {
    expiresIn: "30 min",
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}
