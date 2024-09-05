const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.status(200).render('index');
})

router.get('/software-design-company', (req, res)=> {
    res.status(200).render('info');
})

router.get('/about-us', (req, res)=> {
    res.status(200).render('pages/about-us');
})

router.get('/contact-us', (req, res)=> {
    res.status(200).render('pages/contact-us');
})

router.get('/services', (req, res)=> {
    res.status(200).render('pages/services');
})

module.exports = router