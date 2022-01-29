import Link from 'next/link';
import { useRouter } from 'next/router';

const DesktopMenu = () => {
    // router hook
    const router = useRouter();
    const path = router.pathname;

    return <nav className='ml-4 md:ml-0 text-white uppercase flex'>
        <Link href='/'>
            <a className={`block hover:bg-gray-700 p-4 ${path == '/' && 'bg-green-700 hover:bg-green-700'}`}>home</a>
        </Link>
        <Link href='/business'>
            <a className={`block hover:bg-gray-700 p-4 ${path == '/business' && 'bg-green-700 hover:bg-green-700'}`}>business</a>
        </Link>
        <Link href='/sports'>
            <a className={`block hover:bg-gray-700 p-4 ${path == '/sports' && 'bg-green-700 hover:bg-green-700'}`}>sports</a>
        </Link>
    </nav>;
};

export default DesktopMenu;
