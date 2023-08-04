import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Image from 'next/image';

const supabase = createServerComponentClient({ cookies });

export default async function Greeting() {
    async function fetch_first_name_and_avatar_url() {
        const {
            data: { session: currentSession }
        } = await supabase.auth.getSession();

        const user_id = currentSession?.user?.id;

        const { data: profile_info, error: profile_info_fetch_error } =
            await supabase
                .from('profiles')
                .select()
                .eq('profile_id', user_id)
                .single();

        const first_name = profile_info?.firstName;
        const avatar_url = profile_info?.avatar_url;

        return {
            first_name,
            avatar_url,
            profile_info_fetch_error,
        };
    }

    const { first_name, avatar_url } =
        await fetch_first_name_and_avatar_url();

    return (
        <>
            <h2 className='text-center'>
                <span className='text-3xl '>
                    Hallo{' '}
                    <span className='font-bold text-coastal-blue-10'>
                        {first_name}
                    </span>
                    ,
                </span>{' '}
                <br />
                <span className='text-2xl'>Willkommen in deinem Profil</span>
            </h2>

            <Image
                src={avatar_url}
                alt='profile avatar'
                width={128}
                height={128}
                className='object-cover w-32 h-32 col-span-3 rounded-full'
            />
        </>
    );
}
