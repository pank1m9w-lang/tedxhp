import type { APIRoute } from 'astro';
import { neon } from '@neondatabase/serverless';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const sql = neon(import.meta.env.DATABASE_URL);

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
    `;

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
    `;

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Database error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Database error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
