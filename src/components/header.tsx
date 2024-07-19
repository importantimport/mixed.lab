import { Container, Text, getPreferredColorScheme, setPreferredColorScheme } from '@react-three/uikit'
import { useState } from 'react'
import { Moon, Sun, SunMoon } from '@react-three/uikit-lucide'
import { Button } from '@react-three/uikit-default'

import { useXRStore } from '@react-three/xr'
import { Menubar, MenubarMenu, MenubarTrigger } from './default/menubar'

export const Header = () => {
  const store = useXRStore()
  const [pcs, updatePCS] = useState(() => getPreferredColorScheme())
  return (
    <Menubar borderRadius={0} paddingX={8} lg={{ paddingX: 16 }}>
      <MenubarMenu>
        <MenubarTrigger>
          <Text>Mixed.Lab</Text>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger onClick={() => store.enterAR()}>
          <Text>Enter AR</Text>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger onClick={() => store.enterVR()}>
          <Text>Enter VR</Text>
        </MenubarTrigger>
      </MenubarMenu>
      <Container flexGrow={1} />
      <MenubarMenu>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => window.open('https://github.com/importantimport/mixed.lab', '_blank')}
        >
          <Text>Source Code</Text>
        </Button>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          onClick={() => {
            setPreferredColorScheme(pcs === 'light' ? 'dark' : pcs === 'dark' ? 'system' : 'light')
            updatePCS(getPreferredColorScheme())
          }}
        >
          {pcs === 'dark' ? <Moon /> : pcs === 'system' ? <SunMoon /> : <Sun />}
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  )
}
