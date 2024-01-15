import { FiTrash2 } from 'react-icons/fi';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export default function DeleteUser({ profileId }: { profileId: UUID }) {
    async function deleteUser() {
        'use server';
        const supabase = createServerComponentClient({ cookies });
        await supabase.auth.admin.deleteUser(profileId); // Deleting user
        revalidatePath('/admin/kunden');
        redirect('/admin/kunden');
    }
    return (
        <form className='ml-auto' action={deleteUser}>
            <button type='submit'>
                <FiTrash2 size={30} color='red' />
            </button>
        </form>
    );
}
