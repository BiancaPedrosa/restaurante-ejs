const express = require('express');
const router = express.Router();
const path = require('path');
const cardapio = require('../cardapio.js');

// Página Principal
router.get('/', (req, res) => {
  res.render('home', { title: 'Restaurante - Página Inicial' });
});

// Cardápio
router.get('/cardapio', (req, res) => {
    // Executa a lógica do seu módulo
    const dados = cardapio.getProdutos(path.join(__dirname, '../data/cardapio.json'));
    
    // Renderiza a página usando o template EJS, passando os dados do cardápio
    res.render('cardapio', { produtos: dados, title: 'Cardápio Dinâmico' });
});

// Fale Conosco
router.get('/faleconosco', (req, res) => {
  res.render('faleconosco', { title: 'Fale Conosco' });
});

router.post('/faleconosco',(req, res) => {
  const { nome, email, mensagem } = req.body;
  
  res.render('sucesso', {
    title: 'Mensagem Enviada!',
    titulo: 'Mensagem Enviada!',
    mensagem: `Obrigado, ${nome}! Sua mensagem foi recebida com sucesso e entraremos em contato em breve.`,
    linkVoltar: '/faleconosco'
  });
});

// Reservas
router.get('/reservas', (req, res) => {
  res.render('reserva', { title: 'Reserva de Mesa' });
});

router.post('/reservas', (req, res) => {
   const { nome, email, data } = req.body;
   
   res.render('sucesso', {
     title: 'Reserva Confirmada!',
     titulo: 'Reserva Confirmada!',
     mensagem: `Obrigado, ${nome}! Sua reserva para o dia ${data} foi confirmada com sucesso. Esperamos por você!`,
     linkVoltar: '/reservas'
   });
});

module.exports = router; // Exporta o roteador para ser usado no app.js