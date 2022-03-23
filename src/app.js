const express = require('express')
const app = express()
const cors = require('cors')
const jiraApiRouter = require('./routers/jiraresapi.router')

app.use(cors());
app.use('/api/jira', jiraApiRouter);


module.exports = app;

