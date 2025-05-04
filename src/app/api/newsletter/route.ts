import { NextResponse } from 'next/server';
import brevo from '@getbrevo/brevo';

const apiInstance = new brevo.ContactsApi();
apiInstance.setApiKey(brevo.ContactsApiApiKeys.apiKey, process.env.BREVO_API_KEY || '');

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const createContact = new brevo.CreateContact();
    createContact.email = email;
    createContact.listIds = [3]; // Replace with your actual list ID

    const result = await apiInstance.createContact(createContact);

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