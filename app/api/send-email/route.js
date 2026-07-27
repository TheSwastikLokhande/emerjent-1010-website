import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, phone, email, message, type } = body

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 })
    }

    const accessKey = process.env.WEB3FORMS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '0161f088-7001-4cae-8865-4b757eb4fd73'

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
