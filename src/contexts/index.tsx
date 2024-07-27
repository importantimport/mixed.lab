import type { ReactNode } from 'react'
import { FontFamilyProvider } from '@react-three/uikit'
import { ComposeContextProvider } from 'foxact/compose-context-provider'

import { TunnelProvider } from './tunnel'

interface Props {
  children?: ReactNode
}

/* eslint-disable react/no-missing-key */
const contexts = [
  <FontFamilyProvider
    inter={{
      medium: '/assets/fonts/inter-medium.json',
    }}
  />,
  <TunnelProvider />,
]
/* eslint-enable react/no-missing-key */

export const Contexts = ({ children }: Props) => (
  <ComposeContextProvider contexts={contexts}>
    {children}
  </ComposeContextProvider>
)
