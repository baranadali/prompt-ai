"use client"
import { useState } from "react";
import Sidebar from "@/components/sidebar/sidebar";
import Content from "@/components/content/content";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className="h-screen w-full flex flex-col sm:flex-row items-start ">
        <div className="sm:w-[16%] w-full h-full">
            <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        </div>
        <div className="flex-1 p-8">
            <Content selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        </div>
    </div>
  );
}
