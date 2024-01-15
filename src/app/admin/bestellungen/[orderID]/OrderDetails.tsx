import React from 'react';
import supabase from '@utils/supabase';
import { convertAdressObjectToString } from '@lib/dataManipulation';
import ImageComponent from '@components/ImageComponent';

export default async function OrderDetails({ orderId }: { orderId: UUID }) {
    const { data: orderDetailsObject } = (await supabase
        .from('orders')
        .select('*')
        .eq('orderId', orderId)
        .single()) as SbFetchResponseObject<Order>;
    if (!orderDetailsObject) {
        throw new Error('Bestelldaten konnten nicht geldaden werden');
    }
    const { createdAt, userId, customerDetails } = orderDetailsObject;
    const isLoggedIn = userId !== 'guest';
    const infoPanel = (
        <section className='pt-8 pb-16 '>
            <h2 className='pb-8 text-xl font-bold'>
                Bestelldatum: {createdAt.split('T')[0]}
            </h2>
            <div className='flex w-full gap-8 px-8 py-4 '>
                <ImageComponent
                    size={24}
                    rounded='full'
                    desktopSize={48}
                    src='/defaultProfilePicture.jpeg'
                />
                <div>
                    <div className='py-2'>
                        <h3 className='font-bold'>Kontakt</h3>
                        <h4>Name: {customerDetails?.name}</h4>
                        <h4>Telefonnummer: {customerDetails?.phone}</h4>
                        <h4>Email: {customerDetails?.email}</h4>
                    </div>
                    <div className='py-2'>
                        <h3 className='font-bold'>Adresse</h3>
                        <h4>
                            Lieferadresse:{' '}
                            {convertAdressObjectToString(
                                customerDetails?.delivery
                            )}
                        </h4>
                        <h4>
                            Rechnungsadresse:{' '}
                            {convertAdressObjectToString(
                                customerDetails?.billing
                            )}
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
    return infoPanel;
}
