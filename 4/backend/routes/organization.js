const express = require('express');
const OrganizationController = require('../controllers/organization');

const router = express.Router();

router.get('/', OrganizationController.getAll);
router.post('/create', OrganizationController.create);
router.put('/:id/edit', OrganizationController.edit);

module.exports = router;
