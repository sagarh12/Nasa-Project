const express = require('express')
const {httpGetAllLaunches, httpaddNewLaunch} = require('./launches.controller')
const launchesRouter = express.Router()

launchesRouter.get('/launches', httpGetAllLaunches)
launchesRouter.post('/launches', httpaddNewLaunch)

module.exports = launchesRouter   