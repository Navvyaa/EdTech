"use client"

import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { ThemeProvider } from "@/providers/theme-provider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        
        enableSystem={true}
        disableTransitionOnChange={false}
       
      >
        {children}
      </ThemeProvider>
    </Provider>
  )
}