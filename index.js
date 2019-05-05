const app = require('express')();
const consign = require('consign')
const port = 3000;
const db = require('./kneconfig/db.js')

app.db=db

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(port,()=>{
    console.log(`Running on port ${port}`);
})
