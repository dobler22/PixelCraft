const {Pool} = require('pg');
const pool= new Pool({
    host:'localhost',
    user:'postgres',
    password:'2022',
    database:'firsapi',
    port:'5432'

})
module.exports={pool}