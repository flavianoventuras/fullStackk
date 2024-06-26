const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res)=>{
    const user = {
        name: 'Tiago',
        surname: 'Barreto',
        age: 37
    }

    const palavra = "texto"
    const auth = true
    res.render('home', {user: user, palavra, auth})
})

app.get('/dashboard', (req, res)=>{
    const items = ['item a', 'item b', 'item c']
    res.render('dashboard', {items})
})

app.listen(3000, ()=>{
    console.log('App funcionando')
})