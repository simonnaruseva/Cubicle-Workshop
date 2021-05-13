const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');

module.exports = (app) => {
    
    app.engine('.hbs', handlebars({ extname: '.hbs'}));
    app.set('view engine','.hbs');

    app.use(express.urlencoded({ extended: true }));

    const staticPathFile = path.join(global.__basedir, 'static');

    app.use(express.static(staticPathFile));
};