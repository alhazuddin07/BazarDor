import { Itype } from "../types/type";
import NavLinkClient from "./NavLinkClient";



const NavLink = async () => {

    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories');
    const data: Itype[] = await res.json();


    return (
        <NavLinkClient categories={data} />
    )
}

export default NavLink;