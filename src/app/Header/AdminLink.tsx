import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';

export default async function AdminLink() {
    const supabase = createServerComponentClient({ cookies });
    const {
        data: { session },
    } = await supabase.auth.getSession();
    return session?.user.role === 'admin_p2d' ? (
        <Link href='/admin'>Admin Panel</Link>
    ) : null;
}
