import NavbarLink from "../navbarLink/NavbarLink";

function Navbar(){
    return(
        <div className="bg-indigo-900 text-white flex">
            <div className="logo h-16 flex items-center ml-3">
                <h1>DTweaker</h1>
            </div>
            <div className="h-16 flex justify-center items-center w-full">
                <NavbarLink title="Tools" active="true"/>
                <NavbarLink title="Home"/>
                <NavbarLink title="Preferences"/>
            </div>
        </div>
    )
}

export default Navbar