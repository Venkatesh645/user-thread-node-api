const db = require('../helpers/db');
const bcrypt = require('bcryptjs');
const Thread = db.Thread;

const list = async(req, res) => {
  const threads = await Thread.find()
    .catch(error => {
      return res.status(422).json({ message: error.message, success: false });
    });
  if (threads) {
    return res.json({ threads, success: true });
  }
};

module.exports.list = list;