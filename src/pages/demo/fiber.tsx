import { Box } from '../../components/box'

/** Example from {@link https://docs.pmnd.rs/react-three-fiber/getting-started/introduction} */
const FiberDemo = () => (
  <>
    <ambientLight intensity={Math.PI / 2} />
    <spotLight angle={0.15} decay={0} intensity={Math.PI} penumbra={1} position={[10, 10, 10]} />
    <pointLight decay={0} intensity={Math.PI} position={[-10, -10, -10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </>
)

export default FiberDemo
