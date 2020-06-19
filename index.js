require('dotenv').config();

const APP = require('./api/server.js');

const PORT = process.env.PORT || 5000;

APP.listen(PORT, () => {
    console.log(`\n* * * Server listening on port ${PORT} * * *\n`);
})