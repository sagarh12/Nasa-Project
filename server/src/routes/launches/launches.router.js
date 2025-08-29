const express = require('express')
const {httpGetAllLaunches, httpaddNewLaunch, httpAbortLaunch} = require('./launches.controller')
const { httpAbortLaunch } = require('../../../../client/src/hooks/requests')
const launchesRouter = express.Router()

launchesRouter.get('/launches', httpGetAllLaunches)
launchesRouter.post('/launches', httpaddNewLaunch)
launchesRouter.delete('/launches/:id', httpAbortLaunch)

module.exports = launchesRouter   