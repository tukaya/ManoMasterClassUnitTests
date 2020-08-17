
const express = require('express');
const { response } = require('express');
const router = express.Router();

const calculateTax = require('../taxCalculator')

router.get('/',(req,res)=>{    
    res.render('index',{tax:''})
})

router.post('/calculateTax', (req,res)=>{  
    const price = req.params.price;
    const type = req.params.type;

    tax = calculateTax(price, type);
    res.render('index', {tax})
})

module.exports = router