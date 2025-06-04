"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  setClassFilter,
  setStatusFilter,
  toggleWeakChapters
} from '@/features/chapterSlice';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ClassLevel, FilterStatus } from '@/types/types';

const Filter = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(state => state.chapters.filters);

  return (
    <div className='flex items-center gap-4'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="lg">
            {filters.classLevel === 'All' ? 'Class' : filters.classLevel}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Select Class</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup 
            value={filters.classLevel} 
            onValueChange={(value) => dispatch(setClassFilter(value as ClassLevel))}
          >
            <DropdownMenuRadioItem value="All">All Classes</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Class 11">Class 11</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Class 12">Class 12</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="lg">
            {filters.status === 'All' ? 'Status' : filters.status}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Chapter Status</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup 
            value={filters.status} 
            onValueChange={(value) => dispatch(setStatusFilter(value as FilterStatus))}
          >
            <DropdownMenuRadioItem value="All">All Status</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Not Started">Not Started</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="In Progress">In Progress</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Completed">Completed</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className='w-px h-6 bg-gray-200' />
      
      <Button 
        variant={filters.showWeakChapters ? "default" : "outline"} 
        size="lg"
        onClick={() => dispatch(toggleWeakChapters())}
      >
        Weak Chapters
      </Button>
    </div>
  )
}

export default Filter