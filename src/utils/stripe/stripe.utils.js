import { loadStripe } from '@stripe/stripe-js';

// export const stripePromise = loadStripe(
//   process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
// );

export const stripePromise = loadStripe(
  'pk_test_51M2FsrSA70wfoxmHKM3oQ09gUPrp4Vj6XP5WR1zIy23GP38cnThCG0Xr3ZvQuf5eKa61k0DVTyV0dJmWlTjY5m5m00zOuI9QJ'
);
