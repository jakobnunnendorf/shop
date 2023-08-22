import { Metadata } from 'next';
import Push2DB from '../Push2DB/Push2DB';

export const metadata = {
    title: '',
    description: '',
};

export default function AddProductPage() {
    return (
        <div className='rborder'>
            <Push2DB />
        </div>
    );
}
