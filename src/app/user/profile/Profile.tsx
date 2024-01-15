import Greeting from './Greeting';
import Link from 'next/link';
import Logout from './Logout';
import UserInfoPanel from './UserInfoPanel/UserInfoPanel';
export default function Profile({}: {}) {
    const profile = (
        <section className='flex flex-col items-center justify-center w-full space-y-8 h-fit '>
            <Greeting />
            <UserInfoPanel />
            <div className='grid grid-cols-1 grid-rows-3 gap-2 md:flex'>
                <Logout />
                <Link
                    href={'/user/recover-account'}
                    className='flex justify-center row-start-2 px-4 py-2 font-bold text-white md:w-36 md:space-x-2 rounded-xl bg-coastal-blue-10'
                >
                    <span>Passwort zurücksetzen</span>
                </Link>
                <Link
                    href={'/user/edit'}
                    className='flex items-center justify-center row-start-3 px-4 py-2 font-bold border md:w-36 md:space-x-2 rounded-xl border-coastal-blue-10 text-coastal-blue-10'
                >
                    <span>bearbeiten</span>
                </Link>
            </div>
        </section>
    );

    return profile;
}
