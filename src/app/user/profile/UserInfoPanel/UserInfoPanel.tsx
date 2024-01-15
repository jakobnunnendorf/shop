/*
    This component is used to display the user information for the current logged user or for a specific user by passing his/her ID as a prop.
*/
import {
    returnAddressStrings,
    returnCurrentSession,
} from '@lib/handleUserData';
import supabase from '@utils/supabase';
import InfoField from './InfoField';

export default async function UserInfoPanel({
    userId,
}: {
    userId?: UUID | undefined;
}) {
    const currentSession = userId ? null : await returnCurrentSession();
    const { data: profile } = (await supabase
        .from('profiles')
        .select('*')
        .eq('profileId', userId || currentSession?.user?.id)
        .single()) as SbFetchResponseObject<Profile>;
    const [deliveryString, billingString] = await returnAddressStrings(
        userId || (currentSession?.user?.id as UUID)
    );
    const infoFields = [
        { fieldName: 'Vorname', value: profile?.firstName, styling: null },
        { fieldName: 'Nachname', value: profile?.lastName, styling: null },
        {
            fieldName: 'Email',
            value: profile?.email,
            styling: 'col-span-2 lg:col-span-1 ',
        },
        { fieldName: 'Telefon', value: profile?.phone, styling: null },
        {
            fieldName: 'Lieferadresse',
            value: deliveryString,
            styling: 'col-span-2',
        },
        {
            fieldName: 'Rechnungsadresse',
            value: billingString,
            styling: 'col-span-2',
        },
    ];

    const informationGrid = (
        <ul className='relative grid w-full grid-cols-2 gap-8 p-8 text-xl border h-fit rounded-3xl lg:w-fit'>
            {infoFields.map((infoField, index) => (
                <li key={index}>
                    <InfoField
                        fieldName={infoField.fieldName}
                        value={infoField.value}
                        styling={infoField.styling}
                    />
                </li>
            ))}
        </ul>
    );

    return informationGrid;
}
