const app = require('./app')
const PORT = process.env.PORT || 8000

const {loadPlanetData} = require('./models/planets.model')

const http = require('http')
const server = http.createServer(app)

await loadPlanetData();
server.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})


