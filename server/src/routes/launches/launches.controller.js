const {getAllLaunches, addNewLaunch } = require('../../models/launches.model')

function httpGetAllLaunches(req, res){
   return res.status(200).json(getAllLaunches)
}

function httpaddNewLaunch(req, res){
 const launch = req.body 

if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.destination){
    return res.status(400).json({error: "missing some property"})
}

 launch.launchDate = new Date(launch.launchDate)
 
 if(launch.launchDate.toString() === 'Invalid Date'){
    return res.status(400).json({
        error: "invalid date"
    })
 }

 addNewLaunch(launch) 
 return res.status(201).json(launch)
}
module.exports = {
    httpGetAllLaunches, httpaddNewLaunch
}