import { create } from 'zustand'

interface SelectedAnalysisType { 
    id: number,
    title: string, 
    description: string, 
    time: string 
}

interface AnalysisStore { 
    SelectedAnalysisArr: SelectedAnalysisType[]
    setSelectedAnalysisType: (data: SelectedAnalysisType) => void
    removeSelectedAnalysisType: (id: number) => void
}

const useSelectedAnalysisType = create<AnalysisStore>((set) => ({
    SelectedAnalysisArr: [],
    setSelectedAnalysisType: (data: SelectedAnalysisType) => {
        set((state) => ({
            SelectedAnalysisArr: [
                ...state.SelectedAnalysisArr.filter(item => item.id !== data.id),
                data,
            ],
        }))
    },
    removeSelectedAnalysisType: (id: number) => {
        set((state) => ({
            SelectedAnalysisArr: state.SelectedAnalysisArr.filter(item => item.id !== id),
        }))
    },
}))

export default useSelectedAnalysisType