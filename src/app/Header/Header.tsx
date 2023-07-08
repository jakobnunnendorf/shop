import LowerRow from './LowerRow/LowerRow';
import SideMenu from './SideMenu';
import UpperRow from './UpperRow/UpperRow';

export default function Header() {
    const wrapper = (
        <header className='max-w-screen fixed z-50 h-fit w-full'>
            <UpperRow />
            <LowerRow />
            <SideMenu />
        </header>
    );
    return wrapper;
}
