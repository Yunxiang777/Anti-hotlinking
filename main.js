const express = require('express');
const app = express();

app.use((req, res, next) => {
    let referer = req.get('referer');
    if (referer) {
        let url = new URL(referer);
        //域名若不是'127.0.0.1',禁止訪問
        if (url.hostname !== '127.0.0.1') {
            res.status(404).send('<h1>404 Not Found</h1>');
            return;
        }
    }
    next();
})

app.use(express.static(__dirname + '/public'));
app.listen(3000, () => {
    console.log('Listening on port 3000...');
})