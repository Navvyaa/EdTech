"use client"

import React from 'react'
import Filter from './Filter'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setClassFilter, setStatusFilter } from '@/features/chapterSlice';
const MainContent = () => {
 const dispatch =useAppDispatch();
 const currentSubject=useAppSelector(state=> state.chapters.filters.currentSubject)
 const filters = useAppSelector(state => state.chapters.filters);
  return (
    <main className='relative w-full h-full bg-background border border-subtext-2  '>
        
        
        <Filter />
    </main>
  )
}

export default MainContent