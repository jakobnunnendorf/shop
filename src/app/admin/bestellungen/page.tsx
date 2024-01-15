// import { Metadata } from 'next';
import OrderTable from './OrderTable';
export const metadata = {
    title: '',
    description: '',
};

export default function OrderManagementPage() {
    return (
        <section className='w-full h-full'>
            <h1 className='p-16 text-3xl font-bold'>Bestellungen verwalten</h1>
            <OrderTable />
        </section>
    );
}
