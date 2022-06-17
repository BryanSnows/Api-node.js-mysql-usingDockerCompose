const { Router } = require('express');

const routes = new Router();

routes.get('/health', (req, res) => {
    res.send({message: 'Conect wichm sucess'})
})

module.exports = routes