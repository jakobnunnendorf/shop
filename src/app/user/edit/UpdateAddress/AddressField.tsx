import React from 'react';

export default function AddressField({
    deliveryOrBilling,
    name,
    placeholder,
    styling,
}: {
    deliveryOrBilling: string;
    name: string;
    placeholder: string;
    styling?: string;
}) {
    const addressField = (
        <input
            type='text'
            name={`${deliveryOrBilling + name}`}
            placeholder={placeholder}
            className={`w-full ${styling} border`}
        />
    );
    return addressField;
}
