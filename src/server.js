const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use([morgan('dev'), cors(), express.json()])

app.use('/api/v1/tickets', require('./routes'))



app.use('/health', (_req, res) =>{
  res.status(200).json({message: 'Success'})
})


// /**
//  * This is a function
//  * @param {string} name pass your name
//  * @return {boolean}
//  */
// function testFunc(name){
//   name
// }


app.use((_req, _res, next) =>{
  const error = new Error('Resource Not Found')
  error.status = 404;
  next(error)
})

app.use((error, _req, res, _next) => {
  console.log(error);
  if(error.status){
    return res.status(error.status).json({
      message: error.message,
    })
  }
  res.status(500).json({message: "Something went wrong"})
})


const post = process.env.PORT || 4000
app.listen(post, () => {
  console.log('Server is listening on PORT', post);
})
