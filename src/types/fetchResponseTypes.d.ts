interface IAuthResponse {
    session: IAuthSessionResponse | null;
    user: IAuthUserResponse | null;
}

interface IAuthSessionResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    user: {
        id: string;
        aud: string;
        role: string;
        email: string;
        email_confirmed_at: string;
        phone: string;
        confirmation_sent_at: string;
        confirmed_at: string;
        last_sign_in_at: string;
        app_metadata: {
            provider: string;
            providers: string[];
        };
        user_metadata: Record<string, unknown>;
        identities: {
            id: string;
            userId: string;
            identity_data: {
                email: string;
                sub: string;
            };
            provider: string;
            last_sign_in_at: string;
            createdAt: string;
            updated_at: string;
        }[];
        created_at: string;
        updated_at: string;
    };
    expires_at: number;
}

interface IAuthUserResponse {
    id: string;
    aud: string;
    role: string;
    email: string;
    email_confirmed_at: string;
    phone: string;
    confirmation_sent_at: string;
    confirmed_at: string;
    last_sign_in_at: string;
    app_metadata: {
        provider: string;
        providers: string[];
    };
    user_metadata: Record<string, unknown>;
    identities: {
        id: string;
        userId: string;
        identity_data: {
            email: string;
            sub: string;
        };
        provider: string;
        last_sign_in_at: string;
        createdAt: string;
        updated_at: string;
    }[];
    createdAt: string;
    updated_at: string;
}
