import LowerRow from './LowerRow/LowerRow';
import SideMenu from './SideMenu/SideMenu';
import UpperRow from './UpperRow/UpperRow';

export default function Header() {
    const wrapper = (
        <header className='fixed z-50 h-fit w-full'>
            <UpperRow />
            <LowerRow />
            <SideMenu />
        </header>
    );
    return wrapper;
}
