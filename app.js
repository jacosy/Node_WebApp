const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

app.set('views', path.resolve(__dirname, "views"))
app.set('view engine', 'ejs')
app.use(morgan('tiny'))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')))

app.get('/', (req, res) => {   
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/default', (req, res)=>{
  const obj = { 
    title: 'My Test Title',
    content: [{name: 'Test Name', value: 'Test Value'}, {name: 'Test 2', value: 'Value 2'}]
}
  res.render('default/default', obj) 
})

app.listen(3000, () => {
  console.log(`WebApp is running, Listening port 3000`)
});