import { useState } from 'react'

/** Example from {@link https://docs.pmnd.rs/xr/getting-started/introduction} */
export const XRDemo = () => {
  const [red, setRed] = useState(false)

  return (
    <mesh onClick={() => setRed(!red)} pointerEventsType={{ deny: 'grab' }} position={[0, 1, -1]}>
      <boxGeometry />
      <meshBasicMaterial color={red ? 'red' : 'blue'} />
    </mesh>
  )
}
