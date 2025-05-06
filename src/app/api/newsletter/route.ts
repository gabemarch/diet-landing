import { NextResponse } from 'next/server';
import * as Brevo from '@getbrevo/brevo';

let apiInstance: Brevo.ContactsApi;

try {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    throw new Error('BREVO_API_KEY is not defined');
  }

  apiInstance = new Brevo.ContactsApi();
  apiInstance.setApiKey(Brevo.ContactsApiApiKeys.apiKey, apiKey);
} catch (error) {
  console.error('Failed to initialize Brevo API:', error);
}

export async function POST(request: Request) {
  try {
    if (!apiInstance) {
      throw new Error('Brevo API not initialized');
    }

    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const createContact = new Brevo.CreateContact();
    createContact.email = email;
    createContact.listIds = [3];

    await apiInstance.createContact(createContact);

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
} 