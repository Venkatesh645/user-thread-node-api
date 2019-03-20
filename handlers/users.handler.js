const db = require('../helpers/db');
const bcrypt = require('bcryptjs');
const User = db.User;

const create = async(req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    const user = new User({ username });
    user.password = bcrypt.hashSync(password, 10);
    await user.save();
    return res.json({ message: 'User created successfully!', success: true });
  }
  else {
    return res.status(422).json({ message: 'username/password field is empty', success: false });
  }

};

module.exports.create = create;