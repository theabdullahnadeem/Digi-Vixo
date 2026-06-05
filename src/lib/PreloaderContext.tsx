'use client'
import { createContext, useContext } from 'react'

export const PreloaderContext = createContext(false)

export function usePreloaderReady() {
  return useContext(PreloaderContext)
}
