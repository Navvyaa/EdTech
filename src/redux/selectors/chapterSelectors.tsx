import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'


export const selectAllChapters = (state: RootState) => state.chapters.chapters;


export const selectFilters = (state: RootState) => state.chapters.filters;

export const selectCurrentSubjectUnits = createSelector(
  [selectAllChapters, selectFilters],
  (chapters, filters) => {
    const subjectChapters = chapters.filter(
      chapter => chapter.subject === filters.currentSubject
    );
    const uniqueUnits = new Set(subjectChapters.map(chapter => chapter.unit));
    return Array.from(uniqueUnits);
  }
);


export const selectFilteredChapters = createSelector(
  [selectAllChapters, selectFilters],
  (chapters, filters) => {
    return chapters.filter(chapter => {
      if (chapter.subject !== filters.currentSubject) return false;
      
      if (filters.classLevel !== "All" && 
          chapter.class !== filters.classLevel) return false;
      
      if (filters.unit !== "All" && 
          chapter.unit !== filters.unit) return false;
      
      if (filters.status !== "All" && 
          chapter.status !== filters.status) return false;
      
      if (filters.showWeakChapters && 
          !chapter.isWeakChapter) return false;
      
      return true;
    });
  }
);