import Left from './Left';
import Showcase from './Showcase';

export function CategoryBlocks() {
    return (
        <div className='flex w-full flex-col overflow-hidden py-8 lg:h-[70vh] lg:flex-row lg:shadow-xl'>
            <Left />
            <Showcase />
        </div>
    );
}
