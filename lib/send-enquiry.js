// Direct client-safe enquiry submission using Web3Forms
// Compatible with both Static Hosting (Hostinger public_html) and Serverless (Vercel/Node)
export async function sendEnquiryEmail({ name, phone, email, message, type }) {
  const accessKey =
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
    '0161f088-7001-4cae-8865-4b757eb4fd73'

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
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
    return data
  } catch (error) {
    console.error('Web3Forms dispatch error:', error)
    return { error: error.message }
  }
}
