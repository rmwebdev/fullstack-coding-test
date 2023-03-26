const User = require('../models/user');

class UserController {
  static async register(req, res) {
    const { username, password } = req.body;
    try {
      const { user, token } = await User.register(username, password);
      res.json({ user, token });
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: err.message });
    }
  }

  static async login(req, res) {
    const { username, password } = req.body;
    try {
      const { user, token } = await User.login(username, password);
      res.json({ user, token });
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = UserController;
