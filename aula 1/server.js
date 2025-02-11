const express = require ('require');
const ex = express ();

const port = 3000;

ex.get('/',(req, res) => {
    res.send('server express');
});

ex.listen(port, () => {
    console.log ("servidor rodando na porta", port);
})