"use client"
import { CaretRight, MathOperations,Flask,Atom } from '@phosphor-icons/react'

import React from 'react'
import { Button } from "@/components/ui/button"
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setCurrentSubject } from '@/features/chapterSlice'
import { SubjectName } from '@/types/types'


export const Navbar = () => {
    const dispatch = useAppDispatch();
    const currentSubject = useAppSelector(state => state.chapters.filters.currentSubject);

    const handleSubjectClick = (subject: SubjectName) => {
        dispatch(setCurrentSubject(subject));
    };

    return (
        <nav className="lg:shadow-md bg-background text-foreground p-4 sticky flex flex-col items-center lg:w-1/3 w-full z-10 sm:h-[100dvh] ">
            {/* <div className='sm:w-1/2 m-auto '> */}
            <div className='flex gap-2 w-full  justify-center'>
                <img src="/exam logo.svg" className=' hidden lg:block' alt="" />
                <p className='font-bold text-xl'>JEE Main</p>
            </div>
            <p className='pt-4 pb-6 text-sm hidden lg:block text-subtext px-3'>2025 - 2009 | 173 Papers | 15825 Qs</p>
            <div className='flex flex-row justify-evenly sm:w-full sm:flex-col items-center gap-6'>
                <Button
                    variant={currentSubject === "Physics" ? "secondary" : "ghost"}
                    size={"lg"}
                    className='w-auto sm:w-[70%] px-2 py-4 text-lg flex items-center justify-between'
                    onClick={() => handleSubjectClick("Physics")}>
                    <div className='flex sm:flex-row flex-col items-center sm:gap-8'>
                        <Atom size={32} color="#ffffff" className='bg-orange-400 rounded-xl' />

                        <p className='hidden sm:block text-xl text-left'>Physics PYQs</p>
                    <span className='sm:hidden text-subtext'>Phy</span>

                    </div>
                    <CaretRight size={32} className="hidden sm:block" />

                </Button>
                <Button
                    variant={currentSubject === "Chemistry" ? "secondary" : "ghost"}
                    size={"lg"}
                    className='w-auto sm:w-[70%] px-2 text-lg flex items-center justify-between'
                    onClick={() => handleSubjectClick("Chemistry")}>
                          <div className='flex sm:flex-row flex-col items-center sm:gap-8'>
                    <Flask size={32} color="#ffffff" className='bg-green-400 rounded-xl' />

                    <p className='hidden sm:block text-xl text-left'>Chemistry PYQs</p>
                    <span className='sm:hidden text-subtext'>Chem</span>
                    </div>
                    <CaretRight size={32} className="hidden sm:block" />

                </Button>
                <Button
                    variant={currentSubject === "Mathematics" ? "secondary" : "ghost"}
                    size={"lg"}
                    className='w-auto sm:w-[70%] px-2 text-lg flex items-center justify-between'
                    onClick={() => handleSubjectClick("Mathematics")}>
                          <div className='flex sm:flex-row flex-col items-center sm:gap-8'>
                          <MathOperations size={32} color="#ffffff" weight="regular" className='bg-blue-500 rounded-xl'/>

                    <p className='hidden sm:block text-xl text-left'>Mathematics PYQs</p>
                    <span className='sm:hidden text-subtext'>Math</span>
                    </div>
                    <CaretRight size={32} className="hidden sm:block" />

                </Button>
            </div>
            {/* </div> */}

        </nav>
    )
}



// 

