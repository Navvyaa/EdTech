"use client"
import { useAppSelector } from '@/hooks/hooks'
import { Skeleton } from "@/components/ui/skeleton"
import { selectFilteredChapters } from '@/redux/selectors/chapterSelectors'
import { ArrowDown, ArrowUp, ArrowsDownUp } from '@phosphor-icons/react'
import { Button } from './ui/button'
export const ChapterList = () => {
    const chapters = useAppSelector(selectFilteredChapters);
    const loading = useAppSelector(state => state.chapters.loading);
    const error = useAppSelector(state => state.chapters.error);

    if (loading) {
        return (
            <div className="space-y-4 p-4">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="flex items-center space-x-4 border border-border p-2">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    if (error) {
        return <div className="text-center text-red-500 p-4">{error}</div>
    }

    if (!chapters.length) {
        return <div className="text-center text-subtext p-4">No chapters found</div>
    }

    return (
        <section className="h-full">
            
            <div className='flex flex-col gap-4 p-4'>
                {chapters.map(chapter => (
                    <div
                        key={chapter.chapter}
                        className="border border-border p-4 rounded-xl flex flex-row justify-between items-center"
                    >
                        <div className='flex gap-4 items-center'>
                            <p>I</p>
                            <h3 className="font-semibold text-lg">{chapter.chapter}</h3>
                        </div>
                        <div className='flex text-sm items-center text-subtext'>
                            <p className='flex items-center gap-2'>
                                2025: {chapter.yearWiseQuestionCount[2025]}Qs
                                {chapter.yearWiseQuestionCount[2025] > chapter.yearWiseQuestionCount[2024]
                                    ? <ArrowUp size={20} color="#1bde17" weight="light" />
                                    : <ArrowDown size={20} color="#de2b17" weight="light" />
                                }
                                | 2024: {chapter.yearWiseQuestionCount[2024]}Qs
                            </p>
                            <p className='px-5'>|</p>
                            <p>113 / 205 Qs</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}