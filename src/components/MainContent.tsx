"use client"
import Image from 'next/image'
import React from 'react'
import Filter from './Filter'
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setClassFilter, setStatusFilter } from '@/features/chapterSlice';
import { SubjectName } from '@/types/types';
import { Atom, MathOperations, Flask } from '@phosphor-icons/react'
import { ChapterList } from './ChapterList';


const getSubjectIcon = (subject: SubjectName) => {
    switch (subject) {
        case "Physics":
            return <Image src="/Physics.svg" alt="" className='w-6 h-6 ' width={8} height={8}/>;
        case "Mathematics":
            return <Image src="/Maths.svg" alt="" className='w-6 h-6 ' width={8} height={8}/>;
        case "Chemistry":
            return <Image src="/Chemistry.svg" alt="" className='w-6 h-6 ' width={8} height={8}/>;
    }
};


const MainContent = () => {
    const dispatch = useAppDispatch();
    const currentSubject = useAppSelector(state => state.chapters.filters.currentSubject)
    const filters = useAppSelector(state => state.chapters.filters);

    return (
        <main className='relative w-full h-[100dvh] bg-background lg:border border-subtext-2 flex flex-col overflow-hidden'>
            
            <div className='flex-none p-3'>
                <div className='sm:flex w-full justify-center flex-col hidden items-center mb-4'>
                    <div className='flex justify-center items-center gap-5 mb-4'>
                        {getSubjectIcon(currentSubject)}
                        <h1 className='text-center text-foreground font-bold text-xl'>{currentSubject} PYQs</h1>
                    </div>
                    <p className='text-sm text-subtext py-4 font-medium'>
                        Chapter-wise Collection of {currentSubject} PYQs
                    </p>
                </div>
                <Filter />
            </div>

            
            <div className='flex-1 overflow-y-auto'>
                <ChapterList />
            </div>
        </main>
    )
}

export default MainContent