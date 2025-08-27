const launches = new Map()

const launch = {
    flightNumber: 100,
    mission: "kepler Exploration X",
    rocket: "explorer IS1",
    launchDate: new Date('december 27, 2030'),
    destinatoion : "kepler-442 b",
    customer : ['ZTM', 'NASA'],
    upcoming: true, 
    success: true, 
}

launches.set(launch.flightNumber, launch)

module.exports = { launches } 