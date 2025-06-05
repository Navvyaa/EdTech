"use client"
import { CaretRight,  ArrowLeftIcon } from '@phosphor-icons/react'
import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { setCurrentSubject } from '@/features/chapterSlice'
import { SubjectName } from '@/types/types'
import { useTheme } from 'next-themes'


export const Navbar = () => {
    const dispatch = useAppDispatch();
    const currentSubject = useAppSelector(state => state.chapters.filters.currentSubject);
    const { theme,systemTheme } = useTheme();
    const isDarkTheme = theme === "system" 
    ? systemTheme === "dark"
    : theme === "dark";



    const handleSubjectClick = (subject: SubjectName) => {
        dispatch(setCurrentSubject(subject));
    };

    return (
        <>
            {/* Desktop Sidebar */}
            <nav className="hidden lg:flex bg-background text-foreground p-4 sticky flex-col items-center w-1/3 z-10 h-[100dvh]">
                <div className='flex gap-2 w-full justify-center items-center'>
                    <Image src="/exam logo.svg" alt="Exam Logo" width={36} height={36} />
                    <p className='font-bold text-xl'>JEE Main</p>
                </div>
                <p className='pt-4 pb-6 text-sm text-muted-foreground px-3 font-medium'>2025 - 2009 | 173 Papers | 15825 Qs</p>
                
                <div className='flex flex-col items-center gap-4 w-full'>
                    <Button
                         variant={currentSubject === "Physics" ? (isDarkTheme ? "secondary" : "default") : "ghost"}
                        size={"lg"}
                        className="w-[75%] p-2 py-6 text-lg flex items-center justify-between"
                        onClick={() => handleSubjectClick("Physics")}>
                        <div className='flex items-center gap-3'>
                            <Image src="/Physics.svg" alt="" className='w-6 h-6 ' width={8} height={8}/>
                            <p className='text-base text-left'>Physics PYQs</p>
                        </div>
                        <CaretRight size={32} />
                    </Button>
                    
                    <Button
                        variant={currentSubject === "Chemistry" ? (isDarkTheme ? "secondary" : "default") : "ghost"}
                        size={"lg"}
                        className="w-[75%] p-2 py-6 text-lg flex items-center justify-between"
                        onClick={() => handleSubjectClick("Chemistry")}>
                        <div className='flex items-center gap-3'>
                            <Image src="/Chemistry.svg" alt="" className='w-6 h-6 ' width={8} height={8}/>
                            <p className='text-base text-left'>Chemistry PYQs</p>
                        </div>
                        <CaretRight size={32} />
                    </Button>
                    
                    <Button
                        variant={currentSubject === "Mathematics" ? (isDarkTheme ? "secondary" : "default") : "ghost"}
                        size={"lg"}
                        className="w-[75%] p-2 py-6 text-lg flex items-center justify-between"
                        onClick={() => handleSubjectClick("Mathematics")}>
                        <div className='flex items-center gap-3'>
                            <Image src="/Maths.svg" alt="" className='w-6 h-6 ' width={8} height={8}/>
                            <p className='text-base text-left '>Mathematics PYQs</p>
                        </div>
                        <CaretRight size={32} />
                    </Button>
                </div>
            </nav>

            {/* Mobile Header */}
            <nav className="lg:hidden bg-background text-foreground p-4 px-0 sticky top-0 w-full z-10">
                <div className='flex gap-2 w-full items-center mb-4'>
                    <ArrowLeftIcon size={24} className='text-foreground pl-2' />
                    <div className='flex items-center w-full gap-2 justify-center'>
                        <p className='font-bold text-xl'>JEE Main</p>
                    </div>
                </div>
                
                {/* Mobile Subject Tabs */}
                <div className='flex justify-around w-full pt-4 border-b border-border'>
                    <Button
                        variant="ghost"
                        size="lg"
                        className={`flex flex-col items-center gap-2 px-6 py-8 rounded-none relative ${
                            currentSubject === "Physics" 
                                ? "text-blue-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500" 
                                : "text-muted-foreground hover:text-foreground"
                        }`}
                        onClick={() => handleSubjectClick("Physics")}>
                        <Image src="/Physics.svg" alt="" className='w-6 h-6 ' width={8} height={8}/>
                        <span className="text-sm mb-2">Phy</span>
                    </Button>
                    
                    <Button
                        variant="ghost"
                        size="sm"
                        className={`flex flex-col items-center gap-2 px-6 py-8 rounded-none relative ${
                            currentSubject === "Chemistry" 
                                ? "text-blue-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500" 
                                : "text-muted-foreground hover:text-foreground"
                        }`}
                        onClick={() => handleSubjectClick("Chemistry")}>
                        <Image src="/Chemistry.svg" alt="" className='w-6 h-6 ' width={8} height={8}/>
                        <span className="text-sm mb-2">Chem</span>
                    </Button>
                    
                    <Button
                        variant="ghost"
                        size="sm"
                        className={`flex flex-col items-center gap-2 px-6 py-8 rounded-none relative ${
                            currentSubject === "Mathematics" 
                                ? "text-blue-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500" 
                                : "text-muted-foreground hover:text-foreground"
                        }`}
                        onClick={() => handleSubjectClick("Mathematics")}>
                       <Image src="/Maths.svg" alt="" className='w-6 h-6 ' width={8} height={8}/>
                        <span className="text-sm mb-2">Math</span>
                    </Button>
                </div>
            </nav>
        </>
    )
}