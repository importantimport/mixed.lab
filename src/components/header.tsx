import { Container, Text } from '@react-three/uikit'
import { Button } from '@react-three/uikit-default'
import { FlaskConical, Moon, Sun, SunMoon } from '@react-three/uikit-lucide'
import { IfInSessionMode, useXRStore } from '@react-three/xr'

import { useColorScheme } from '../hooks/use-color-scheme'
import { Menubar, MenubarMenu, MenubarTrigger } from './default/menubar'

export const Header = () => {
  const store = useXRStore()
  const { colorScheme, setColorScheme } = useColorScheme()

  return (
    <IfInSessionMode deny={['immersive-ar', 'immersive-vr']}>
      <Menubar borderRadius={0} lg={{ paddingX: 16 }} paddingX={8}>
        <MenubarMenu>
          <MenubarTrigger onClick={() => window.location.pathname = '/'}>
            <FlaskConical paddingX={4} width={24} />
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
            onClick={() => window.open('https://github.com/importantimport/mixed.lab', '_blank')}
            size="sm"
            variant="ghost"
          >
            <Text>Source Code</Text>
          </Button>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger
            onClick={() => setColorScheme(colorScheme === 'light' ? 'dark' : colorScheme === 'dark' ? 'system' : 'light')}
          >
            {colorScheme === 'dark' ? <Moon /> : colorScheme === 'system' ? <SunMoon /> : <Sun />}
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </IfInSessionMode>
  )
}
