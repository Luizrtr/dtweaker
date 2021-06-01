function NavbarLink(props){
    return(
        <div className="navbarItem flex flex-col">
            <a href className={`m-4 text-lga cursor-pointer duration-200 ease-out
            ${props.active? "border-b-2 pb-1" : "border-b-0 pb-0"}`}>
                {props.title}
            </a>
        </div>
    )
}

export default NavbarLink