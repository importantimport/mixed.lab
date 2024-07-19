import type { ReactNode } from 'react'
import { FontFamilyProvider } from '@react-three/uikit'
import { ComposeContextProvider } from 'foxact/compose-context-provider'

interface Props {
  children?: ReactNode
}

const contexts = [
  // eslint-disable-next-line react/no-missing-key
  <FontFamilyProvider
    inter={{
      medium: '/assets/fonts/inter-medium.json',
    }}
  />,
]

export const Contexts = ({ children }: Props) => (
  <ComposeContextProvider contexts={contexts}>
    {children}
  </ComposeContextProvider>
)
