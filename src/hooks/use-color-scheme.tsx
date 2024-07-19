import { type PreferredColorScheme, setPreferredColorScheme } from '@react-three/uikit'
import { useLocalStorage } from 'foxact/use-local-storage'
import { useEffect } from 'react'

export const useColorScheme = (serverValue: PreferredColorScheme = 'system') => {
  const [colorScheme, setColorScheme] = useLocalStorage<PreferredColorScheme>('color-scheme', serverValue)

  useEffect(() => {
    setPreferredColorScheme(colorScheme)
  }, [colorScheme])

  return { colorScheme, setColorScheme }
}
