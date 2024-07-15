import { Container } from '@react-three/uikit'

/** Example from {@link https://docs.pmnd.rs/uikit/getting-started/introduction} */
export const UikitDemo = () => (
  <>
    <Container flexGrow={1} backgroundOpacity={0.5} hover={{ backgroundOpacity: 1 }} backgroundColor="red" />
    <Container flexGrow={1} backgroundOpacity={0.5} hover={{ backgroundOpacity: 1 }} backgroundColor="blue" />
  </>
)
