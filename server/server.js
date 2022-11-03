const express = require('express');

const path = require('path');
const PORT = process.env.PORT || 3434
const mail_route = require('./routes/mailroute')


const app = express();

require('./routes/htmlroutes')(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/contact', mail_route)

app.use(express.static(path.join(__dirname, '../client/build')));


app.listen(PORT, () => console.log(`SERVER SERVING AT PORT ${PORT}`))
