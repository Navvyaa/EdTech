"use client"
import { CaretRight, MathOperations, Flask, Atom, ArrowLeftIcon } from '@phosphor-icons/react'

import React from 'react'
import { Button } from "@/components/ui/button"
import { useAppDispatch, useAppSelector, useThemeCheck } from '@/hooks/hooks'
import { setCurrentSubject } from '@/features/chapterSlice'
import { SubjectName } from '@/types/types'


export const Navbar = () => {
    const dispatch = useAppDispatch();
    const currentSubject = useAppSelector(state => state.chapters.filters.currentSubject);
    const isDarkTheme = useThemeCheck();
    
    const handleSubjectClick = (subject: SubjectName) => {
        dispatch(setCurrentSubject(subject));
    };

    return (
        <>
            {/* Desktop Sidebar */}
            <nav className="hidden lg:flex bg-background text-foreground p-4 sticky flex-col items-center w-1/3 z-10 h-[100dvh]">
                <div className='flex gap-2 w-full justify-center items-center'>
                    <img src="/exam logo.svg" alt="" />
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
                            <Atom size={32} color="#ffffff" className='bg-orange-400 rounded-xl p-1' />
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
                            <Flask size={32} color="#ffffff" className='bg-green-400 rounded-xl p-1' />
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
                            <MathOperations size={32} color="#ffffff" weight="regular" className='bg-blue-500 rounded-xl p-1' />
                            <p className='text-base text-left'>Mathematics PYQs</p>
                        </div>
                        <CaretRight size={32} />
                    </Button>
                </div>
            </nav>

            {/* Mobile Header */}
            <nav className="lg:hidden bg-background text-foreground p-4 sticky top-0 w-full z-10">
                <div className='flex gap-2 w-full items-center mb-4'>
                    <ArrowLeftIcon size={24} className='text-foreground' />
                    <div className='flex items-center w-full gap-2 justify-center'>
                        <p className='font-bold text-xl'>JEE Main</p>
                    </div>
                </div>
                
                {/* Mobile Subject Tabs */}
                <div className='flex justify-evenly w-full border-b border-border'>
                    <Button
                        variant="ghost"
                        size="lg"
                        className={`flex flex-col items-center gap-1 px-6 py-8 rounded-none relative ${
                            currentSubject === "Physics" 
                                ? "text-blue-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500" 
                                : "text-muted-foreground hover:text-foreground"
                        }`}
                        onClick={() => handleSubjectClick("Physics")}>
                        <Atom size={60} weight='fill' className="text-primary bg-amber-600 rounded-sm mb-3 p-3"/>
                        <span className="text-sm mb-2">Phy</span>
                    </Button>
                    
                    <Button
                        variant="ghost"
                        size="sm"
                        className={`flex flex-col items-center gap-1 px-6 py-8 rounded-none relative ${
                            currentSubject === "Chemistry" 
                                ? "text-green-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-green-500" 
                                : "text-muted-foreground hover:text-foreground"
                        }`}
                        onClick={() => handleSubjectClick("Chemistry")}>
                        <Flask size={24} className={currentSubject === "Chemistry" ? "text-green-500" : "text-muted-foreground"} />
                        <span className="text-xs">Chem</span>
                    </Button>
                    
                    <Button
                        variant="ghost"
                        size="sm"
                        className={`flex flex-col items-center gap-1 px-6 py-8 rounded-none relative ${
                            currentSubject === "Mathematics" 
                                ? "text-blue-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500" 
                                : "text-muted-foreground hover:text-foreground"
                        }`}
                        onClick={() => handleSubjectClick("Mathematics")}>
                        <MathOperations size={24} weight="regular" className={currentSubject === "Mathematics" ? "text-blue-500" : "text-muted-foreground"} />
                        <span className="text-xs">Math</span>
                    </Button>
                </div>
            </nav>
        </>
    )
}