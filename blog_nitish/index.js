const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var cors = require('cors')
const port = 3000
//routes 
const blogRoutes=require('./src/routing/blog.routing')
// middlware
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/blog',blogRoutes);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})