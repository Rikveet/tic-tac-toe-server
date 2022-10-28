require('dotenv').config({ path: require('find-config')('.env') })
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('<h1>This is the server end of Tic Tac Toe</h1>');
});

if (process.env.LOCAL_DEV_MODE){
    server.listen(process.env.LOCAL_HOST_PORT, process.env.LOCAL_HOST_NAME);
    console.log('listening on '+process.env.LOCAL_HOST_NAME+':'+process.env.LOCAL_HOST_PORT);
}
else{
    server.listen(0, () => {
        console.log('server running');
    });
}
