import { Container } from '@react-three/uikit'

import { useTunnel } from '../../contexts/tunnel'

/** Example from {@link https://docs.pmnd.rs/uikit/getting-started/introduction} */
export const UikitDemo = () => {
  const tunnel = useTunnel()

  return (
    <tunnel.In>
      <Container flexDirection="row" gap={10} height="100%" padding={10} width="100%">
        <Container backgroundColor="red" backgroundOpacity={0.5} flexGrow={1} hover={{ backgroundOpacity: 1 }} />
        <Container backgroundColor="blue" backgroundOpacity={0.5} flexGrow={1} hover={{ backgroundOpacity: 1 }} />
      </Container>
    </tunnel.In>
  )
}
