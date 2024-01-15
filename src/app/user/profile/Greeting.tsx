import ImageComponent from '@components/ImageComponent';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function Greeting({ profileId }: { profileId?: UUID }) {
    const supabase = createServerComponentClient({ cookies });
    const {
        data: { session: currentSession },
    } = await supabase.auth.getSession();

    const userId = profileId || currentSession?.user?.id;

    const { data: profileInfo, error } = (await supabase
        .from('profiles')
        .select('*')
        .eq('profileId', userId)
        .single()) as SbFetchResponseObject<Profile>;
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-center'>
                <span className='text-3xl '>
                    Hallo &nbsp;
                    <span className='font-bold text-coastal-blue-10'>
                        {profileInfo?.firstName + ','}
                    </span>
                </span>
                <br />
                <span className='text-2xl'>Willkommen in deinem Profil</span>
            </h2>
            <ImageComponent
                src={profileInfo?.avatarURL}
                size={32}
                cover
                rounded='full'
                name='profile_picture'
            />
        </div>
    );
}
