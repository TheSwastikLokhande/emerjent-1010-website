import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'

let client
let db

async function getDb() {
  if (db) return db
  client = new MongoClient(process.env.MONGO_URL)
  await client.connect()
  db = client.db(process.env.DB_NAME || 'onetenten_computers')
  return db
}

export async function GET(request, { params }) {
  const path = (await params)?.path || []
  const route = path.join('/')

  if (route === '' || route === 'health') {
    return NextResponse.json({ ok: true, service: '1010 Computers API' })
  }

  if (route === 'enquiries') {
    try {
      const database = await getDb()
      const items = await database.collection('enquiries').find({}).sort({ createdAt: -1 }).limit(50).toArray()
      return NextResponse.json({ items })
    } catch (e) {
      return NextResponse.json({ items: [], error: e.message }, { status: 500 })
    }
  }

  return NextResponse.json({ error: 'Not found' }, { status: 404 })
}

export async function POST(request, { params }) {
  const path = (await params)?.path || []
  const route = path.join('/')

  if (route === 'enquiries') {
    try {
      const body = await request.json()
      const { name, phone, message, type } = body
      if (!name || !phone) {
        return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 })
      }
      const database = await getDb()
      const doc = {
        id: uuidv4(),
        name: String(name).slice(0, 100),
        phone: String(phone).slice(0, 20),
        message: String(message || '').slice(0, 1000),
        type: String(type || 'general').slice(0, 40),
        createdAt: new Date().toISOString(),
      }
      await database.collection('enquiries').insertOne(doc)
      return NextResponse.json({ ok: true, id: doc.id })
    } catch (e) {
      return NextResponse.json({ ok: false, error: e.message }, { status: 500 })
    }
  }

  return NextResponse.json({ error: 'Not found' }, { status: 404 })
}
