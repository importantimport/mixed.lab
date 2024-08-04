import type { ComponentPropsWithoutRef } from 'react'

import { Container, Text } from '@react-three/uikit'
import { Button, colors, Separator } from '@react-three/uikit-default'

import { H2 } from '../../components/typography/headings'
import { useTunnel } from '../../contexts/tunnel'

const Sidebar = (props: ComponentPropsWithoutRef<typeof Container>) => (
  <Container
    flexDirection="column"
    minWidth={320}
    overflow="scroll"
    paddingBottom={48}
    // paddingRight={20}
    {...props}
  >
    <Container
      flexDirection="column"
      flexShrink={0}
      gap={16}
      paddingBottom={16}
    >
      <Container
        flexDirection="column"
        paddingX={12}
        paddingY={8}
      >
        <Text
          fontSize={18}
          fontWeight="semi-bold"
          letterSpacing={-0.4}
          lineHeight={28}
          marginBottom={8}
          paddingX={16}
        >
          Discover
        </Text>
        <Container flexDirection="column" gap={4}>
          <Button justifyContent="flex-start" variant="secondary">
            <Text>Models</Text>
          </Button>
          <Button justifyContent="flex-start" variant="ghost">
            <Text>Materials</Text>
          </Button>
          <Button justifyContent="flex-start" variant="ghost">
            <Text>HDRIS</Text>
          </Button>
        </Container>
      </Container>
      <Container flexDirection="column" paddingX={12} paddingY={8}>
        <Text
          fontSize={18}
          fontWeight="semi-bold"
          letterSpacing={-0.4}
          lineHeight={28}
          marginBottom={8}
          paddingX={16}
        >
          Collections
        </Text>
        <Container flexDirection="column" gap={4}>
          <Button justifyContent="flex-start" variant="ghost">
            <Text>Favorits</Text>
          </Button>
          <Button justifyContent="flex-start" variant="ghost">
            <Text>Models</Text>
          </Button>
          <Button justifyContent="flex-start" variant="ghost">
            <Text>Materials</Text>
          </Button>
          <Button justifyContent="flex-start" variant="ghost">
            <Text>HDRIs</Text>
          </Button>
          <Button justifyContent="flex-start" variant="ghost">
            <Text>Creators</Text>
          </Button>
        </Container>
      </Container>
    </Container>
  </Container>
)

const SettingsChamber = () => {
  const tunnel = useTunnel()

  return (
    <tunnel.In>
      <Container
        backgroundColor={colors.background}
        flexBasis={0}
        flexDirection="row"
        flexGrow={1}
        gap={16}
      >

        <Sidebar marginTop={16} />
        <Container flexDirection="column" gap={16} padding={20}>
          <H2>General</H2>
          <Text color={colors.mutedForeground} fontSize={14} lineHeight={20}>
            Manage your account settings and set e-mail preferences.
          </Text>
          <Separator />
        </Container>
      </Container>
    </tunnel.In>
  )
}

export default SettingsChamber
