import { Container, Text } from '@react-three/uikit'
import { Button, colors } from '@react-three/uikit-default'
import { useNavigate } from '@tanstack/react-router'

import { H1, H2 } from '../components/typography/headings'
import { useTunnel } from '../contexts/tunnel'

const Index = () => {
  const navigate = useNavigate()
  const tunnel = useTunnel()

  return (
    <tunnel.In>
      <Container
        backgroundColor={colors.background}
        flexBasis={0}
        flexDirection="column"
        flexGrow={1}
        gap={16}
        lg={{ padding: 32 }}
        padding={16}
        xl={{ padding: 64 }}
      >
        <H1>Mixed.Lab</H1>
        <H2>Chambers</H2>
        <Container flexDirection="column" gap={4}>
          <Button justifyContent="flex-start" onClick={() => navigate({ to: '/chamber/mmd' })} variant="secondary">
            <Text>MMD</Text>
          </Button>
          <Button justifyContent="flex-start" onClick={() => navigate({ to: '/chamber/settings' })} variant="ghost">
            <Text>Settings</Text>
          </Button>
        </Container>
        <H2>Demos</H2>
        <Container flexDirection="column" gap={4}>
          <Button justifyContent="flex-start" onClick={() => navigate({ to: '/demo/fiber' })} variant="ghost">
            <Text>Fiber</Text>
          </Button>
          <Button justifyContent="flex-start" onClick={() => navigate({ to: '/demo/uikit' })} variant="ghost">
            <Text>Uikit</Text>
          </Button>
          <Button justifyContent="flex-start" onClick={() => navigate({ to: '/demo/xr' })} variant="ghost">
            <Text>XR</Text>
          </Button>
        </Container>
      </Container>
    </tunnel.In>
  )
}

export default Index
