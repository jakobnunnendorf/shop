import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Metadata } from 'next';

export const metadata = {
    title: '',
    description: '',
};

export default async function TestingPage() {
    const supabase = createClientComponentClient();
    const {
        data,
        error,
    }: {
        data: profilesFetchData;
        error: supabasefetchResponseError;
    } = await supabase.from('orders').select('*');

    return (
        <section>
            <pre>{typeof data}</pre>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </section>
    );
}
