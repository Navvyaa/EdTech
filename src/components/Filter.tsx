"use client"

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { selectCurrentSubjectUnits, selectFilters } from '@/redux/selectors/chapterSelectors';
import {
  fetchChapters,
  setClassFilter,
  setStatusFilter,
  setUnitFilter,
  toggleWeakChapters
} from '@/features/chapterSlice';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,


} from "@/components/ui/dropdown-menu"
import { ClassLevel, FilterStatus } from '@/types/types';
import { ArrowsDownUp, CaretDown } from '@phosphor-icons/react';
import { selectFilteredChapters } from '@/redux/selectors/chapterSelectors'
const Filter = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  const currentSubjectUnits = useAppSelector(selectCurrentSubjectUnits);
  const chapters = useAppSelector(selectFilteredChapters);
  useEffect(() => {
    dispatch(fetchChapters());
  }, [dispatch])

  const handleUnitChange = (unit: string) => {
    let newUnits: string[];

    if (unit === "All") {
     
      newUnits = ["All"];
    } else if (filters.units.includes("All")) {
      
      newUnits = [unit];
    } else {
      
      if (filters.units.includes(unit)) {
        newUnits = filters.units.filter(u => u !== unit);
       
        if (newUnits.length === 0) newUnits = ["All"];
      } else {
        newUnits = [...filters.units, unit];
      }
    }
    dispatch(setUnitFilter(newUnits));
  };

  return (
    <>
      <div className='flex items-center gap-3 lg:p-2 px-4 pl-0 lg:px-2 lg:pl-2 no-scrollbar overflow-x-auto'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="default">
              {filters.classLevel === 'All' ? 'Class' : filters.classLevel}
              <CaretDown size={32} weight="regular" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
          
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
            <Button variant="outline" size="default">
              {filters.units.includes("All")
                ? 'Units'
                : `${filters.units.length} Units`}
              <CaretDown size={32} weight="regular" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuCheckboxItem
              checked={filters.units.includes("All")}
              onCheckedChange={() => handleUnitChange("All")}
            >
              All Units
            </DropdownMenuCheckboxItem>
            {currentSubjectUnits.map((unit) => (
              <DropdownMenuCheckboxItem
                key={unit}
                checked={filters.units.includes(unit)}
                onCheckedChange={() => handleUnitChange(unit)}
              >
                {unit}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>


        <div className="text-subtext" >|</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" >
              {filters.status === 'All' ? 'Status' : filters.status}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">

            <DropdownMenuRadioGroup
              value={filters.status}
              onValueChange={(value) => dispatch(setStatusFilter(value as FilterStatus))}
            >
              <DropdownMenuRadioItem value="All">All</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Not Started">Not Started</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="In Progress">In Progress</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Completed">Completed</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>



        <Button
          variant={filters.showWeakChapters ? "default" : "outline"}

          onClick={() => dispatch(toggleWeakChapters())}
        >
          Weak Chapters
        </Button>
      </div>
      <div className='flex justify-between  sticky top-0 bg-background py-2'>
        <p className='py-3 lg:px-2'>Showing all Chapters ({chapters.length})</p>
        <Button variant="ghost" className='px-4 py-2 flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600'>
          <ArrowsDownUp size={32} color="#0279f7" weight="light" />
          Sort
        </Button>
      </div>
    </>
  )
}

export default Filter