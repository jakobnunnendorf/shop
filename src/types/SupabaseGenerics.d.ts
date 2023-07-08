// 2023-07-01 15:46:01.298192+00
type created_at =
    `${number}-${number}-${number}T${number}:${number}:${number}.${number}+${number}:${number}`;

// 73a9a442-134c-4cd3-8b07-24528180689b
type UUID = `${string}-${string}-${string}-${string}-${string}`;

type email = `${string}@${string}.${string}`;

type sb_fetchResponseObject<DataObject> = {
    data: DataObject | null;
    error: supabasefetchResponseError | null;
    count: number | null;
    status: number;
    statusText: string;
};

type supabasefetchResponseError = supabaseErrorObject | null;

interface supabaseErrorObject {
    code: string;
    details: string;
    hint: null | string;
    message: string;
}

type bucketURL<bucketName> =
    `https://oymlbhawkvsltawcjlrq.supabase.co/storage/v1/object/public/${bucketName}/${string}`;

interface address {
    city: string;
    country: string;
    line1: string;
    line2: null;
    postal_code: `${number}`;
    state: null | string;
}
