import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { priceId } = req.body;

  if (req.method !== "POST") {
    return res.status(405);
  }
  if (!priceId) {
    return res.status(400).json({ error: "price not found" });
  }
  const successUrl = `https://nft-code-ulxs.vercel.app/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `https://nft-code-ulxs.vercel.app/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
