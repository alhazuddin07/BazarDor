import Link from "next/link";
import { Itype } from "../types/type";



const NavLink = async () => {

    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories');
    const data: Itype[] = await res.json();

    return (
        <div className="border border-amber-50 shadow-sm">
        
            <div className="container mx-auto flex gap-9 p-3 ">

                <Link href={'/'}>হোম</Link>
                
                {
                    data.map(d => 
                    <Link key={d.id} href={`/category/${d.slug}`}>
                        <div className="flex gap-1">
                            <span>{d.icon}</span>
                            <div>{d.nameBn}</div>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    )
}

export default NavLink;