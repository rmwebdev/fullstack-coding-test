const db = require('../db');

class Organization {
  static async findAll() {
    const { rows } = await db.query('SELECT * FROM organizations');
    return rows;
  }

  static async findById(id) {
    const { rows } = await db.query('SELECT * FROM organizations WHERE id = $1', [id]);
    return rows[0];
  }

  static async create({ name, parentId }) {
    const { rows } = await db.query('INSERT INTO organizations (name, parent_id) VALUES ($1, $2) RETURNING *', [name, parentId]);
    return rows[0];
  }

  static async update(id, { name, parentId }) {
    const { rows } = await db.query('UPDATE organizations SET name = $1, parent_id = $2 WHERE id = $3 RETURNING *', [name, parentId, id]);
    return rows[0];
  }

  static async delete(id) {
    const { rows } = await db.query('DELETE FROM organizations WHERE id = $1 RETURNING *', [id]);
    return rows[0];
  }
}

module.exports = Organization;
