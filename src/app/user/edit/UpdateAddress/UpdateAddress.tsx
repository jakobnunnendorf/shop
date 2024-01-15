import React from 'react';
import AddressField from './AddressField';

export default function UpdateAddress() {
    const addressFields = [
        { name: 'Line1', placeholder: 'Adresszeile 1', styling: 'col-span-2' },
        { name: 'Line2', placeholder: 'Adresszeile 2', styling: 'col-span-2' },
        {
            name: 'PostalCode',
            placeholder: 'Postleitzahl',
            styling: undefined,
        },
        { name: 'City', placeholder: 'Stadt', styling: undefined },
    ];
    const updateAddress = (
        <section className='relative grid w-full grid-cols-2 gap-8 p-8 text-xl border h-fit rounded-3xl lg:w-fit'>
            <h2 className='font-bold'>Lieferadresse:</h2>
            <ul className='grid grid-cols-2 col-span-2 '>
                {addressFields.map((addressField, index) => {
                    return (
                        <li key={index}>
                            <AddressField
                                deliveryOrBilling='delivery'
                                name={addressField.name}
                                placeholder={addressField.placeholder}
                                styling={addressField.styling}
                            />
                        </li>
                    );
                })}
            </ul>
            <h2 className='font-bold'>Rechnungsadresse:</h2>
            <ul className='grid grid-cols-2 col-span-2'>
                {addressFields.map((addressField, index) => {
                    return (
                        <li key={index}>
                            <AddressField
                                deliveryOrBilling='billing'
                                name={addressField.name}
                                placeholder={addressField.placeholder}
                                styling={addressField.styling}
                            />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
    return updateAddress;
}
