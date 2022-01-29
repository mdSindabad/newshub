import DesktopMenu from "./DesktopMenu";

const Header = () => {
    return <header className='bg-gray-600 md:mx-20 flex items-end justify-between'>
        <div>
            <DesktopMenu />
        </div>
        <div>
            {/* search icon */}
        </div>
    </header>;
};

export default Header;
