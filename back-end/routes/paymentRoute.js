const express = require('express')
const Router = express.Router()
const stripe = require('stripe')(process.env.STRIPE_KEY)


Router.post('/create-checkout-session', async (req, res) => {
    const {ticketPayment, userId} = req.body
    const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'THÔNG TIN VÉ ĐÃ ĐẶT',
            description: 
            'Tên phim: ' + ticketPayment.nameMovie + 
            ' - Rạp: '+ ticketPayment.nameCinema + 
            ' - Ngày chiếu: ' + ticketPayment.startDate + 
            ' - Giời chiếu: ' + ticketPayment.startTime
            ,
          },

          unit_amount: ticketPayment.total*100000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',

    success_url: `${process.env.CLIENT_PORT}/checkout-success`,
    cancel_url: `${process.env.CLIENT_PORT}/booking`,
  });

  res.json({url: session.url});
});

module.exports = Router