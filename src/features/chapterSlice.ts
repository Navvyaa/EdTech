import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ChapterState, ChapterData, ClassLevel, FilterStatus, SubjectName } from '@/types/types';
import mockChaptersData from '@/data/all_subjects_chapter_data.json';

export const fetchChapters = createAsyncThunk(
    'chapters/fetchChapters',
    async () => {
        try {
           await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
           return mockChaptersData as ChapterData[]; 
          
        } catch (error) {
            console.log('Error fetching chapters:', error);
            throw error;
        }
    }
);

const initialState: ChapterState = {
    chapters: [],
    filters: {
        classLevel: "All",
        units: ["All"],
        status: "All",
        showWeakChapters: false,
        currentSubject: "Physics"
    },
    loading: false,
    error: null
};

const chapterSlice = createSlice({
    name: 'chapters',
    initialState,
    reducers: {
        setChapters: (state, action: PayloadAction<ChapterData[]>) => {
            state.chapters = action.payload;
        },
        setClassFilter: (state, action: PayloadAction<ClassLevel>) => {
            state.filters.classLevel = action.payload;
        },
        setUnitFilter: (state, action: PayloadAction<string[]>) => {
            state.filters.units = action.payload;
        },
        setStatusFilter: (state, action: PayloadAction<FilterStatus>) => {
            state.filters.status = action.payload;
        },
        toggleWeakChapters: (state) => {
            state.filters.showWeakChapters = !state.filters.showWeakChapters;
        },
        resetFilters: (state) => {
            state.filters = initialState.filters;
        },
        setCurrentSubject:(state, action: PayloadAction<SubjectName>) => {
            state.filters.currentSubject=action.payload;
            state.filters.units= ["All"];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchChapters.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchChapters.fulfilled, (state, action) => {
                state.loading = false;
                state.chapters = action.payload;
            })
            .addCase(fetchChapters.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch chapters';
            });
    }
});

export const {
    setChapters,
    setClassFilter,
    setUnitFilter,
    setStatusFilter,
    toggleWeakChapters,
    resetFilters,
    setCurrentSubject
} = chapterSlice.actions;

export default chapterSlice.reducer;