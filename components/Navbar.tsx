'use client'
import Image from "next/image";
import Link from "next/link";

import { useState,useEffect } from "react";

export default function Navbar(){
    const [open,setOpen] = useState(false)
    useEffect(()=>{
        setOpen(false)
    },[])
    return(
        <div className=" relative w-screen h-[10vh] md:py-0 py-5 px-10 lg:px-20 xl:px-40 flex flex-row justify-between items-center">
            <div>
                <Image
                src={"/images/logo.svg"}
                width={32}
                height={32}
                alt="logo"/>
            </div>
            <div className=" flex md:hidden">
                <button onClick={()=>{setOpen(!open)}}>
                    <Image
                    src={ open ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"}
                    width={24}
                    height={16}
                    alt="menu"/>
                </button>
            </div>
            <div className=" md:flex hidden space-x-10  flex-row font-barlow-con justify-center items-center">
                <Link href={"/"} className=" text-lg font-bold ">
                    PRODUCT
                </Link>
                <Link href={"/"} className=" text-lg font-bold ">
                    FEATURES
                </Link>
                <Link href={"/"} className=" text-lg font-bold ">
                    PRICING
                </Link>
                <div className=" w-2 h-2 bg-custom-400 rounded-full">

                </div>
                <Link href={"/"} className=" text-lg font-bold text-custom-400 ">
                    LOGIN
                </Link>

            </div>
            {open && (
                <div className="  w-full flex md:hidden justify-center items-center absolute left-0 top-20">
                    <div className=" w-10/12 flex justify-center items-center flex-col space-y-5  p-5 bg-white shadow-lg   ">
                        <Link onClick={()=>{setOpen(false)}} className=" font-bold text-custom-200 font-barlow-con" href={"/"}>
                            PRODUCT
                        </Link>
                        <Link onClick={()=>{setOpen(false)}} className=" font-bold text-custom-200 font-barlow-con" href={"/"}>
                            FEATURES
                        </Link>
                        <Link onClick={()=>{setOpen(false)}} className=" font-bold text-custom-200 font-barlow-con" href={"/"}>
                            PRICING
                        </Link>
                        <hr className=" h-[1px] border border-custom-500 bg-custom-500 w-full" />
                        <Link onClick={()=>{setOpen(false)}} className=" font-bold text-custom-400 font-barlow-con" href={"/"}>
                            LOGIN
                        </Link>

                    </div>
                </div>
            )}
        </div>
    )
}