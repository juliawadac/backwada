const express = require ("express");
const router = express.Router();


router.post ('/login', ()=>(console.log ("rota de login")));


()=>console.log ("Rota de login");


module.exports = router;