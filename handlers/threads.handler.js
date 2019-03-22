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

const create = async(req, res) => {
  const { title, description, tags } = req.body;
  const { username } = req.user;
  const tagArray = tags.split(',');
  const threadInstance = new Thread({ title, description, tags: tagArray, username });
  const thread = await threadInstance.save()
    .catch(error => {
      return res.status(422).json({ message: error.message, success: false });
    });
  return res.json({ message: 'Thread created successfully!!', thread, success: true });
};

module.exports.list = list;
module.exports.create = create;