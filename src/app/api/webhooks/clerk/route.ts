import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from "svix";
import { getDbClient } from "@/utils/dbConnect";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env');
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    return new Response('Error occured', {
      status: 400
    });
  }

  // Handle the webhook
  const eventType = evt.type;
  if (eventType === 'user.created') {
    const { id, email_addresses, first_name, last_name } = evt.data;

    try {
      const client = await getDbClient();
      const db = client.db("3dhippo");
      
      // Create user in MongoDB
      await db.collection("users").insertOne({
        clerkId: id,
        email: email_addresses[0]?.email_address,
        firstName: first_name || '',
        lastName: last_name || '',
        createdAt: new Date(),
        updatedAt: new Date()
      });

      console.log('User successfully created in MongoDB');
    } catch (error) {
      console.error('Error creating user in MongoDB:', error);
      return new Response('Error creating user', { status: 500 });
    }
  }

  return new Response('Success', { status: 200 });
}