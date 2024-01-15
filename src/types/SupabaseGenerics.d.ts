// 2023-07-01 15:46:01.298192+00
type CreatedAt =
    `${number}-${number}-${number}T${number}:${number}:${number}.${number}+${number}:${number}`;

// 73a9a442-134c-4cd3-8b07-24528180689b
type UUID = `${string}-${string}-${string}-${string}-${string}`;

type Email = `${string}@${string}.${string}`;

type SbFetchResponseObject<DataObject> = {
    data: DataObject | null;
    error: SupabaseFetchResponseError | null;
    count: number | null;
    status: number;
    statusText: string;
};

type SupabaseFetchResponseError = SupabaseErrorObject | null;

interface SupabaseErrorObject {
    code: string;
    details: string;
    hint: null | string;
    message: string;
}

type BucketURL<BucketName> =
    `https://oymlbhawkvsltawcjlrq.supabase.co/storage/v1/object/public/${BucketName}/${string}`;

type BucketName = 'profilePictures' | 'productImages';

type ProductTitle = string;

type ProductFilePath = `${ProductTitle}-${UUID}/${ColorKey}/${number}`;

interface Address {
    city: string | null;
    country: string | null;
    line1: string | null;
    line2: string | null;
    postalCode: string | null;
    state: string | null;
}
/*
interface session{
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    user: {
        id: UUID;
        aud: string;
        role: string;
        email: email;
        email_confirmed_at: string;
        phone: string;
        confirmation_sent_at: string
        confirmed_at: string
        last_sign_in_at: string
        app_metadata: { provider: string, providers: [ string ] },
        user_metadata: object,
        identities: [
        {
            id: UUID,
            userId: UUID
            identity_data: { email: email, sub: UUID },
            provider: string
            last_sign_in_at: string
            createdAt: string
            updated_at: string
        }
    ],
    createdAt: string
    updated_at: string
    },
    expires_at: number
}
interface user {
    id: UUID
    aud: string
    role: string
    email: email
    email_confirmed_at: string
    phone: string,
    confirmation_sent_at: string
    confirmed_at: string
    last_sign_in_at: string
    app_metadata: { provider: string, providers: [ string ] },
    user_metadata: object,
    identities: [
        {
        id: UUID,
        userId: UUID
        identity_data: { email: email, sub: UUID },
        provider: string,
        last_sign_in_at: string,
        createdAt: string,
        updated_at: string
        }
    ],
    createdAt: string,
    updated_at: string
}

{
  session: {
    access_token: 
      'eyJhbGciOiJIUzI1NiIsImtpZCI6IjNrY2xIYmxIc1BJaTJKWjIiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjg5NzEwMDI2LCJpYXQiOjE2ODk3MDY0MjYsImlzcyI6Imh0dHBzOi8vaHR0cHM6Ly9veW1sYmhhd2t2c2x0YXdjamxycS5zdXBhYmFzZS5jby9hdXRoL3YxIiwic3ViIjoiZGU4ZDJiMGQtZGIzZS00ODg0LWI5OGEtMzQ1MWU0MTM3YzhkIiwiZW1haWwiOiJqbnVubmVuZG9yZkBpY2xvdWQuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE2ODk3MDY0MjZ9XSwic2Vzc2lvbl9pZCI6IjI2NGFkNjhkLThkZGQtNDcyNS1hZTA0LWQwMDFjMTE2MTcxNiJ9.SU1eh_sBKzxnIb0XI5m4Z9l0l6ePEed2MuHVYa8HAd8',
    token_type: 'bearer',
    expires_in: 3600,
    refresh_token: 'gquY-EdqkL-6wBCi1MVxxA',
    user: {
      id: 'de8d2b0d-db3e-4884-b98a-3451e4137c8d',
      aud: 'authenticated',
      role: 'authenticated',
      email: 'jnunnendorf@icloud.com',
      email_confirmed_at: '2023-07-13T08:54:59.420605Z',
      phone: '',
      confirmation_sent_at: '2023-07-13T08:54:32.845701Z',
      confirmed_at: '2023-07-13T08:54:59.420605Z',
      last_sign_in_at: '2023-07-18T18:53:46.158790933Z',
      app_metadata: { provider: 'email', providers: [ 'email' ] },
      user_metadata: {},
      identities: [
        {
          id: 'de8d2b0d-db3e-4884-b98a-3451e4137c8d',
          userId: 'de8d2b0d-db3e-4884-b98a-3451e4137c8d',
          identity_data: { email: 'jnunnendorf@icloud.com', sub: 'de8d2b0d-db3e-4884-b98a-3451e4137c8d' },
          provider: 'email',
          last_sign_in_at: '2023-07-13T08:54:32.831228Z',
          createdAt: '2023-07-13T08:54:32.831266Z',
          updated_at: '2023-07-13T08:54:32.831266Z'
        }
      ],
      createdAt: '2023-07-13T08:54:32.810585Z',
      updated_at: '2023-07-18T18:53:46.165501Z'
    },
    expires_at: 1689710026
  },
  user: {
    id: 'de8d2b0d-db3e-4884-b98a-3451e4137c8d',
    aud: 'authenticated',
    role: 'authenticated',
    email: 'jnunnendorf@icloud.com',
    email_confirmed_at: '2023-07-13T08:54:59.420605Z',
    phone: '',
    confirmation_sent_at: '2023-07-13T08:54:32.845701Z',
    confirmed_at: '2023-07-13T08:54:59.420605Z',
    last_sign_in_at: '2023-07-18T18:53:46.158790933Z',
    app_metadata: { provider: 'email', providers: [ 'email' ] },
    user_metadata: {},
    identities: [
      {
        id: 'de8d2b0d-db3e-4884-b98a-3451e4137c8d',
        userId: 'de8d2b0d-db3e-4884-b98a-3451e4137c8d',
        identity_data: { email: 'jnunnendorf@icloud.com', sub: 'de8d2b0d-db3e-4884-b98a-3451e4137c8d' },
        provider: 'email',
        last_sign_in_at: '2023-07-13T08:54:32.831228Z',
        createdAt: '2023-07-13T08:54:32.831266Z',
        updated_at: '2023-07-13T08:54:32.831266Z'
      }
    ],
    createdAt: '2023-07-13T08:54:32.810585Z',
    updated_at: '2023-07-18T18:53:46.165501Z'
  }
}*/