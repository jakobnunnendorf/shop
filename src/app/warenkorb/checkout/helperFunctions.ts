const signup_and_checkout = async (event: React.FormEvent) => {
    'use server';
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const supabase = createClientComponentClient();
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });
    await fetch('/api/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            cartItems,
        }),
    });
};
