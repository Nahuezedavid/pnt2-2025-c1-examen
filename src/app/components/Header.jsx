'use client';

import Link from "next/link";

export default function Header (){
    return(
        <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img src="Pochoclo.jpg" alt="Logo" className="h-20"/>
        <nav>
            <Link href="/peliculas" className="hover:underline">Pelìculas</Link>
        </nav>
        </header>
    );

}