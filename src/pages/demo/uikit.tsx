import { Container } from '@react-three/uikit'
import { useTunnel } from '../../contexts/tunnel'

/** Example from {@link https://docs.pmnd.rs/uikit/getting-started/introduction} */
export const UikitDemo = () => {
  const tunnel = useTunnel()

  return (
    <tunnel.In>
      <Container height="100%" width="100%" flexDirection="row" padding={10} gap={10}>
        <Container flexGrow={1} backgroundOpacity={0.5} hover={{ backgroundOpacity: 1 }} backgroundColor="red" />
        <Container flexGrow={1} backgroundOpacity={0.5} hover={{ backgroundOpacity: 1 }} backgroundColor="blue" />
      </Container>
    </tunnel.In>
  )
}
