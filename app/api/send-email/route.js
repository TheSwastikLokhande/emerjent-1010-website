import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, phone, email, message, type } = body

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 })
    }

    const accessKey = process.env.WEB3FORMS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY

    if (!accessKey) {
      console.warn('Web3Forms access key not configured in environment variables.')
      return NextResponse.json({ ok: false, warning: 'WEB3FORMS_KEY environment variable missing' })
    }

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Website Enquiry from ${name} [${type || 'Contact'}]`,
        from_name: '1010 Computers Website',
        name,
        phone,
        email: email || 'Not provided',
        message: message || 'No message text provided',
        enquiry_type: type || 'Contact Form',
      }),
    })

    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error sending email via Web3Forms:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
