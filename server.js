
let Express = require('express');
let app = Express();

app.use(Express.static('public'));
app.use(Express.json());

app.post('/enviar-nombre', (req, res)=>{
    let { nombre } = req.body;
    console.log(`nombre: ${nombre}`);
    res.sendStatus(200);
});

app.listen(3000, ()=>{
    console.log(`port listening on http://localhost:3000`);
});