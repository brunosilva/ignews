import Stripe from 'stripe';

const API_KEY = process.env.STRIPE_API_KEY as string;

export const stripe = new Stripe(
    API_KEY,
    {
        apiVersion: '2020-08-27',
        appInfo: {
            name: 'Ignews',
            version: '0.1.0'
        },
    }
)