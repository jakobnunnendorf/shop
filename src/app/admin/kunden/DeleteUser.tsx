'use client';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://oymlbhawkvsltawcjlrq.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95bWxiaGF3a3ZzbHRhd2NqbHJxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzI2MDc5NiwiZXhwIjoyMDAyODM2Nzk2fQ.cfAN5SjRusCHCT8q2fLSNBM6UhdbefmjmmdPn2OLyyk',
    {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
        },
    }
);

export default function deleteUser(profile: profile) {
    return supabase.auth.admin.deleteUser(`${profile.profile_id}`); // Deleting user
}
