import { NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const sql = neon(process.env.DATABASE_URL!)

    // Create table if not exists
    await sql`
      CREATE TABLE IF NOT EXISTS audience_registrations (
        id SERIAL PRIMARY KEY,
        rep_name VARCHAR(255) NOT NULL,
        rep_email VARCHAR(255) NOT NULL,
        rep_phone VARCHAR(50) NOT NULL,
        members TEXT,
        photo_permission VARCHAR(20) NOT NULL,
        after_party VARCHAR(10) NOT NULL,
        party_count INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Insert registration
    await sql`
      INSERT INTO audience_registrations (
        rep_name, rep_email, rep_phone, members, photo_permission, after_party, party_count
      ) VALUES (
        ${data.rep_name},
        ${data.rep_email},
        ${data.rep_phone},
        ${data.members || ''},
        ${data.photo_permission},
        ${data.after_party},
        ${data.party_count || 0}
      )
    `

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ success: false, error: 'Database error' }, { status: 500 })
  }
}
