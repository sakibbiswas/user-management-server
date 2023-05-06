const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
// middlewire
app.use(cors())
app.use(express.json())
const users = [
   
        {id:1,name:'sakib',email:"sakib@gmail.com"},
        {id:2,name:'rakib',email:"rakib@gmail.com"},
        {id:3,name:'pakib',email:"pakib@gmail.com"},
        {id:4,name:'jakib',email:"jakib@gmail.com"},
   
]

app.get('/', (req, res) => {
  res.send('User managment server is running')
})
app.get('/users', (req, res) => {
  res.send(users)
})
app.post('/users', (req, res) => {
    console.log('post api hitting');
    console.log(req.body);
    const Newuser = req.body;
    Newuser.id = users.length + 1;
    users.push(Newuser)
    res.send(Newuser)
})

app.listen(port, () => {
  console.log(`User managment server is running ${port}`)
})