// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do EJS como view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir arquivos estáticos (CSS, imagens do restaurante, JS no cliente)
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal do restaurante (exibição do cardápio)
app.get('/', (req, res) => {
    // Array simulando dados vindos de um banco de dados
    const menuItems = [
        { id: 1, name: 'Hambúrguer Artesanal', price: 35.90, category: 'Lanches' },
        { id: 2, name: 'Pizza Margherita', price: 45.00, category: 'Pizzas' },
        { id: 3, name: 'Suco de Laranja', price: 12.00, category: 'Bebidas' }
    ];

    // Renderiza a view 'index.ejs' injetando o objeto de dados
    res.render('index', { 
        restaurantName: 'O Bom Paladar',
        menu: menuItems 
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando perfeitamente na porta ${PORT}`);
});
