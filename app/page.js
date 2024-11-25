"use client"
import Sidebar from "@/components/sidebar/sidebar";
import { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import {prompt} from '../prompt'
import Link from "next/link";


export default function Home() {
  const [copied, setCopied] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);


  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const filteredPrompts = selectedCategory 
    ? prompt.filter((prm) => prm.category && prm.category.includes(selectedCategory)) 
    : prompt;
  
  return (
    <div className="h-screen w-full flex flex-col sm:flex-row items-start ">
     <div className="sm:w-[16%] w-full h-full">
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
     </div>
     <div className="flex-1 p-8">
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6">
      {copied && (<div className="absolute top-10 right-10 z-40 bg-black border border-zinc-900 py-2 px-4 text-xs rounded-md text-zinc-300">Prompt copied.</div>)}
      {filteredPrompts.map((prm, index) => (
        <li key={index} className="border border-zinc-900 flex flex-col justify-between rounded-lg p-4 relative ">
        <p className="text-xs font-geist_mono text-zinc-500 bg-zinc-900 p-3 h-40 overflow-y-scroll rounded-lg relative transation-all duration-100 hover:text-zinc-200" >{prm.content}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-sm text-white">{prm.title}</h2>
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-zinc-900 block overflow-hidden">
                <img className="w-full h-auto" src={`https://pbs.twimg.com/profile_images/${prm.creator_image_id}_400x400.jpg`}/>
              </span>
              <p className="text-xs text-zinc-500">Added <Link target="_blank" href={prm.creator_link}>{prm.creator}</Link></p>
            </div>
          </div>
          <button className="text-white relative" onClick={() => handleCopy(prm.content)}>
            <MdOutlineContentCopy className="text-zinc-500 hover:text-zinc-400"/>
          </button>
        </div>
      </li>
      ))}
      </ul>
     </div>
    </div>
  );
}
