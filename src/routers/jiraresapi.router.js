const express = require("express");
const jiraApiController = require('../controllers/jirarestapiController')
const jiraRouter = express.Router();

jiraRouter.get('/jira-test', jiraApiController.test)

module.exports = jiraRouter;