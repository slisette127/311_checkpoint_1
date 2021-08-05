const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require('body-parser')
const userRoutes = ('./routes/users')

app.use(express.json())

app.get('/', (req, res) => res.send('default route'))

app.use(userRoutes)

app.listen(port, () => {
  console.log('app is listening on:', port)
})