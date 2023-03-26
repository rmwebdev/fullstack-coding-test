const Organization = require('../models/organization');

class OrganizationController {
  static async getAll(req, res) {
    try {
      const organizations = await Organization.findAll();
      res.json(organizations);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async create(req, res) {
    const { name, parentId } = req.body;
    try {
      const organization = await Organization.create({ name, parentId });
      res.json(organization);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Invalid organization data' });
    }
  }

  static async edit(req, res) {
    const { id } = req.params;
    const { name, parentId } = req.body;
    try {
      const organization = await Organization.update(id, { name, parentId });
      if (!organization) {
        return res.status(404).json({ error: 'Organization not found' });
      }
      res.json(organization);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Invalid organization data' });
    }
  }
}

module.exports = OrganizationController;
