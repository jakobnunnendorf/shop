import React from 'react';

interface InfoFieldData {
    fieldName: string;
    value: string | null | undefined;
    styling: string | null;
}

export default function InfoField({ fieldName, value, styling }: InfoFieldData) {
    const infoField = (
        <div>
            <span className={`font-bold ${styling}`}>
                {fieldName}:{' '}
            </span>
            <br />
            {value || ''}
        </div>
    );
    return infoField;
}
