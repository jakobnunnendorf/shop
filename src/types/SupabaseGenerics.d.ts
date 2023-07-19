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
            user_id: UUID
            identity_data: { email: email, sub: UUID },
            provider: string
            last_sign_in_at: string
            created_at: string
            updated_at: string
        }
    ],
    created_at: string
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
        user_id: UUID
        identity_data: { email: email, sub: UUID },
        provider: string,
        last_sign_in_at: string,
        created_at: string,
        updated_at: string
        }
    ],
    created_at: string,
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
          user_id: 'de8d2b0d-db3e-4884-b98a-3451e4137c8d',
          identity_data: { email: 'jnunnendorf@icloud.com', sub: 'de8d2b0d-db3e-4884-b98a-3451e4137c8d' },
          provider: 'email',
          last_sign_in_at: '2023-07-13T08:54:32.831228Z',
          created_at: '2023-07-13T08:54:32.831266Z',
          updated_at: '2023-07-13T08:54:32.831266Z'
        }
      ],
      created_at: '2023-07-13T08:54:32.810585Z',
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
        user_id: 'de8d2b0d-db3e-4884-b98a-3451e4137c8d',
        identity_data: { email: 'jnunnendorf@icloud.com', sub: 'de8d2b0d-db3e-4884-b98a-3451e4137c8d' },
        provider: 'email',
        last_sign_in_at: '2023-07-13T08:54:32.831228Z',
        created_at: '2023-07-13T08:54:32.831266Z',
        updated_at: '2023-07-13T08:54:32.831266Z'
      }
    ],
    created_at: '2023-07-13T08:54:32.810585Z',
    updated_at: '2023-07-18T18:53:46.165501Z'
  }
}*/