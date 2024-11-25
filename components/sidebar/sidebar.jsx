import Link from "next/link";
import {categories} from '../../categories'
import {prompt} from '../../prompt'
import { IoMdArrowForward } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";

export default function Sidebar({ selectedCategory, setSelectedCategory }) {

    const categoryCounts = categories.map((category) => {
        const count = prompt.filter((item) => item.category && item.category.includes(category.name)).length;
        return { name: category.name, count };
    });

    console.log(categoryCounts);
    
    return (
        <div className="sm:py-8 py-4 px-4 sm:h-full h-[20vh] overflow-y-scroll border-r border-zinc-900 flex flex-col justify-between sm:fixed sm:w-[16%] w-full top-0 left-0 border-b">
            <div>
                <Link className="font-geist_mono text-xs" href="/">prompt-ai.directory</Link>
                <ul className="sm:mt-16 mt-4 flex flex-col gap-1 h-full ">
                    <p className={`flex items-center justify-between hover:bg-zinc-900 py-2 px-3 cursor-pointer rounded-md text-xs ${selectedCategory === null && 'bg-zinc-900'}`} onClick={() => setSelectedCategory(null)}>All</p>
                    {categoryCounts.map((ctg, index) => (
                        <li key={index} className={`flex items-center justify-between hover:bg-zinc-900 py-2 px-3 cursor-pointer rounded-md ${selectedCategory === ctg.name ? 'bg-zinc-900' : ''}`} onClick={() => setSelectedCategory(ctg.name)}>
                            <p className="text-xs">{ctg.name}</p>
                            <p className="text-xs text-zinc-500">{ctg.count}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="sm:block hidden">
                <p className="text-xs text-zinc-500 font-light flex flex-col gap-2 mb-8">
                    This is an AI prompt sharing platform developed with open-source code. You can contribute to the project by adding new features! The data was obtained from semrush.com
                    <Link href="/" target="_blank" className="flex items-center gap-1 text-zinc-300">
                        <IoMdArrowForward/>
                        <p>Go repoistories</p>
                    </Link>
                </p>
                <Link href="https://x.com/baaranadali" target="_blank">
                    <RiTwitterXFill className="text-xs"/>
                </Link>
            </div>
        </div>
        
    )
}