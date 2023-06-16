'use client'

import { Auth } from "@supabase/auth-ui-react"
import {
    ThemeSupa,
} from "@supabase/auth-ui-shared"
import supabase from '@utils/supabase';

export default function AuthPage() {
    return (
        <section>
            <Auth
                supabaseClient={supabase}
                providers={["google"]}
                appearance={{ theme: ThemeSupa }}
                localization={{
                    variables: {
                        sign_in: {
                            email_label: "Deine Email",
                            password_label: "Dein Passwort",
                        },
                    },
                }}
            />
        </section>
    )
}
