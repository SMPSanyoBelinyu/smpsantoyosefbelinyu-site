# SMP Santo Yosef Belinyu - Next.js + Supabase (Admin Dashboard)

This scaffold includes:
- Next.js + Tailwind
- Supabase client integration (lib/supabaseClient.js)
- Admin dashboard pages: /admin, /admin/users, /admin/berita, /admin/spmb
- SQL schema (supabase_schema.sql) to run in Supabase SQL editor.

## Quick start
1. Create a Supabase project and copy your URL & ANON key into .env.local:
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...

2. Run the SQL in supabase_schema.sql in Supabase -> SQL Editor.

3. Install & run locally:
   npm install
   npm run dev

4. Create an admin user (via Supabase Auth or the Dashboard) and set its role='admin' in profiles table.

Notes:
- Admin route protection is minimal client-side; for production add server-side checks / middleware.
- You can push this to GitHub and connect to Vercel for deployment.
