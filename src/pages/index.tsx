import { Container, Text } from '@react-three/uikit'
import { Button, colors } from '@react-three/uikit-default'
import { useTunnel } from '../contexts/tunnel'
import { H1, H2 } from '../components/typography/headings'

export const Index = () => {
  const tunnel = useTunnel()

  return (
    <tunnel.In>
      <Container
        backgroundColor={colors.background}
        flexDirection="column"
        flexBasis={0}
        flexGrow={1}
        gap={16}
        padding={16}
        lg={{ padding: 32 }}
        xl={{ padding: 64 }}
      >
        <H1>Mixed.Lab</H1>
        <H2>Chambers</H2>
        <Container flexDirection="column" gap={4}>
          <Button variant="secondary" justifyContent="flex-start" onClick={() => window.location.pathname = '/chamber/mmd'}>
            <Text>MMD</Text>
          </Button>
        </Container>
        <H2>Demos</H2>
        <Container flexDirection="column" gap={4}>
          <Button variant="ghost" justifyContent="flex-start" onClick={() => window.location.pathname = '/demo/fiber'}>
            <Text>Fiber</Text>
          </Button>
          <Button variant="ghost" justifyContent="flex-start" onClick={() => window.location.pathname = '/demo/uikit'}>
            <Text>Uikit</Text>
          </Button>
          <Button variant="ghost" justifyContent="flex-start" onClick={() => window.location.pathname = '/demo/uikit-xr/'}>
            <Text>Uikit XR</Text>
          </Button>
        </Container>
      </Container>
    </tunnel.In>
  )
}
