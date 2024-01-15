import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default function deleteUser(profileId: UUID) {
    const supabase = createServerComponentClient({ cookies });
    return supabase.auth.admin.deleteUser(profileId); // Deleting user
}
