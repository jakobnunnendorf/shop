import { upsertProfileInfo } from './upsertProfileInfo';
import UpdatePersonalInfo from './UpdatePersonalInfo/UpdatePersonalInfo';
import UpdateAddress from './UpdateAddress/UpdateAddress';
import Save from './Save';
import Cancel from './Cancel';

export default function Page() {
    const page = (
        <form
            action={upsertProfileInfo}
            className='flex flex-col items-center justify-center w-full '
        >
            <h1 className='pb-8 text-3xl font-bold'>Profil bearbeiten</h1>
            <h2 className='pb-4 text-xl font-bold'>Kontaktinfos</h2>
            <UpdatePersonalInfo />
            <h2 className='p-4 text-xl font-bold'>Adresse</h2>
            <UpdateAddress />
            <div className='flex justify-center p-16 space-x-8'>
                <Cancel />
                <Save />
            </div>
        </form>
    );
    return page;
}
