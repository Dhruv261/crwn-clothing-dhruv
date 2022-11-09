require('dotenv').config();
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const stripe = require('stripe')(
  'sk_test_51M2FsrSA70wfoxmHGDQDxLgGms9sjCx4hC6xlVVSe9ffTgj7ODi37Rxu5Ia1rB9RfiLj6If9PM2XyoA3Gfx4EZ0V005kWODNVd'
);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};
