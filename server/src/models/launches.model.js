const launches = new Map()

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: "kepler Exploration X",
    rocket: "explorer IS1",
    launchDate: new Date('december 27, 2030'),
    destination : "kepler-442 b",
    customers : ['ZTM', 'NASA'],
    upcoming: true, 
    success: true, 
}

launches.set(launch.flightNumber, launch)

function getAllLaunches(){
    return Array.from(launches.values())
} 

function addNewLaunch(launch){
latestFlightNumber++;
launches.set(latestFlightNumber, Object.assign(launch, {
    flightNumber : latestFlightNumber,
    upcoming: true, 
    customers : ['ZTM', 'NASA '],
    success : true, 
 }))
}

module.exports = { getAllLaunches, addNewLaunch }  