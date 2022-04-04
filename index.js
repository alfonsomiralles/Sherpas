const express = require ('express')
const http = require('http');
var cors = require('cors');
const customersRouter = require('./routes/customers');
const app = express()
app.use(cors({origin: 'http://localhost:8100'}));
const port = 3307
app.use(express.json())

app.use('/customers',customersRouter)


app.use('/', (req, res)=> {
    res.send('Bienvenido a la API de Alfonso')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

