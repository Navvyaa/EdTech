"use client"
import { useAppSelector } from '@/hooks/hooks'
import { Skeleton } from "@/components/ui/skeleton"
import { selectFilteredChapters } from '@/redux/selectors/chapterSelectors'
import {
    ArrowDown,
    ArrowUp,
    ArrowLeft,
    Graph,
    Function,
    CirclesFour,
    Waves,
    Lightning,
    Atom,
    Flame,
    Flask,
    ChartLine,
    Calculator,
    ArrowElbowLeftUp,
    ArrowCircleLeft,
    Ruler
} from '@phosphor-icons/react'
import { JSX } from 'react'

const getChapterIcon = (chapterName: string) => {

    const iconMap: Record<string, JSX.Element> = {
        "Kinematics": <Graph size={24} weight="light" />,
        "Mathematics in Physics": <Function size={24} weight="light" />,
        "Units and Dimensions": <Ruler size={24} weight="light" />,
        "Waves": <Waves size={24} weight="light" />,
        "Electrostatics": <Lightning size={24} weight="light" />,
        "Nuclear Physics": <Atom size={24} weight="light" />,
        "Thermodynamics": <Flame size={24} weight="light" />,
        "Chemical Bonding": <Flask size={24} weight="light" />,
        "Calculus": <ChartLine size={24} weight="light" />,
        "Algebra": <Calculator size={24} weight="light" />,
        "Motion In Two Dimensions": <ArrowElbowLeftUp size={24} weight="light" />,
        "Motion In One Dimension": <ArrowLeft size={24} weight="light" />,
        "Laws of Motion": <ArrowCircleLeft size={24} weight="light" />,
    };


    return iconMap[chapterName] || <CirclesFour size={24} weight="light" />;
};

export const ChapterList = () => {
    const chapters = useAppSelector(selectFilteredChapters);
    const loading = useAppSelector(state => state.chapters.loading);
    const error = useAppSelector(state => state.chapters.error);
    const hasInitialData = useAppSelector(state => state.chapters.chapters.length > 0);

    if (!hasInitialData || loading) {
        return (
            <div className="space-y-4 p-4">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="flex items-center space-x-4 border border-border p-2 rounded-xl">
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

    if (!chapters.length && loading === false) {
        return <div className="text-center text-subtext p-4 mt-5">Oops! No chapters found—try changing the filters.</div>
    }

    return (
        <section className="h-full mb-2">

            <div className='flex flex-col gap-4 p-4 mb-2'>
                {chapters.map(chapter => (
                    <div
                        key={chapter.chapter}
                        className="lg:border border-border lg:p-4 rounded-xl p-2 flex flex-col lg:flex-row gap-4 justify-between items-center "
                    >
                        <div className='flex gap-4 items-center lg:w-auto w-full'>
                            <div className="text-muted-foreground flex-shrink-0">
                                {getChapterIcon(chapter.chapter)}
                            </div>
                            <div className='flex flex-col justify-between items-start w-full'>
                                <div className='flex flex-row gap-2 justify-between items-center lg:gap-4 w-full'>
                                    <h3 className="font-semibold lg:text-base text-sm truncate max-w-[150px] lg:hidden">{chapter.chapter}</h3>
                                    <h3 className="font-semibold lg:text-base lg:block hidden">{chapter.chapter}</h3>
                                    <p className='text-sm text-subtext lg:hidden'>113 / 205 Qs</p>
                                </div>
                                <div className='lg:hidden text-sm text-subtext w-full'>
                                    <p className='flex gap-2 items-start'>
                                        2025: {chapter.yearWiseQuestionCount[2025]}Qs
                                        {chapter.yearWiseQuestionCount[2025] > chapter.yearWiseQuestionCount[2024]
                                            ? <ArrowUp size={20} color="#1bde17" weight="light" />
                                            : <ArrowDown size={20} color="#de2b17" weight="light" />
                                        }
                                        | 2024: {chapter.yearWiseQuestionCount[2024]}Qs
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='lg:flex hidden text-sm items-center text-subtext'>
                            <p className='flex items-center gap-2'>
                                2025: {chapter.yearWiseQuestionCount[2025]}Qs
                                {chapter.yearWiseQuestionCount[2025] > chapter.yearWiseQuestionCount[2024]
                                    ? <ArrowUp size={20} color="#1bde17" weight="light" />
                                    : <ArrowDown size={20} color="#de2b17" weight="light" />
                                }
                                | 2024: {chapter.yearWiseQuestionCount[2024]}Qs
                            </p>
                            <p className='px-5 '>|</p>
                            <p >113 / 205 Qs</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}