import {create} from 'zustand';

type Page = 'Swap' | 'BitcoinPending'

interface AppState{
    page: Page,
    setPage: (page:Page)=>void
}

const useStore = create<AppState>()((set) => ({
    page: 'Swap',
    setPage: (new_page) => set(() => ({ page:new_page })),
}))

export {useStore, type Page, type AppState}
