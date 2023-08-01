import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

export async function middleware(req) {
    const res = NextResponse.next();
    const supabaseUrl = 'your_supabase_project_url';
const supabaseKey = 'your_supabase_anonymous_key';
const supabase = createMiddlewareClient({ req, res, supabaseUrl, supabaseKey });

    // const supabase = createMiddlewareClient({ req, res });
    await supabase.auth.getSession();
    return res;
}
