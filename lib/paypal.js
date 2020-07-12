import checkoutNodeJssdk from '@paypal/checkout-server-sdk';

export default function client() {
  return new checkoutNodeJssdk.core.PayPalHttpClient(environment());
}

function environment() {
  let clientId = process.env.PAYPAL_CLIENT_ID;
  let clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  return (process.env.NODE_ENV === 'development' ? new checkoutNodeJssdk.core.LiveEnvironment(clientId, clientSecret) : new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret));
}
