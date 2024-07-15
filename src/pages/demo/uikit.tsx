import { Canvas } from '@react-three/fiber'
import { Container, Fullscreen } from '@react-three/uikit'

/** Example from {@link https://docs.pmnd.rs/uikit/getting-started/introduction} */
export const UikitDemo = () => (
  <Canvas>
    <Fullscreen flexDirection="row" padding={10} gap={10}>
      <Container flexGrow={1} backgroundOpacity={0.5} hover={{ backgroundOpacity: 1 }} backgroundColor="red" />
      <Container flexGrow={1} backgroundOpacity={0.5} hover={{ backgroundOpacity: 1 }} backgroundColor="blue" />
    </Fullscreen>
  </Canvas>
)
