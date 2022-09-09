const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3434

const app = express();

require('./routes/mailroute')(app)
// require('./routes/htmlroutes')(app);
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`SERVER SERVING AT PORT ${PORT}`))
