"use client"

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
            return <Atom size={26} weight="light" color="#ffffff" className='bg-orange-400 rounded-sm' />;
        case "Mathematics":
            return <MathOperations size={26} weight="light" color="#ffffff" className='bg-blue-500 rounded-sm' />;
        case "Chemistry":
            return <Flask size={24} weight="light" color="#ffffff" className='bg-green-400 rounded-sm' />;
    }
};


const MainContent = () => {
    const dispatch = useAppDispatch();
    const currentSubject = useAppSelector(state => state.chapters.filters.currentSubject)
    const filters = useAppSelector(state => state.chapters.filters);

    return (
        <main className='relative w-full h-[100dvh] bg-background border border-subtext-2 flex flex-col overflow-hidden'>
            {/* Header - Fixed */}
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

            {/* Chapter List - Scrollable */}
            <div className='flex-1 overflow-y-auto'>
                <ChapterList />
            </div>
        </main>
    )
}

export default MainContent