import { Canvas } from '@react-three/fiber'
import { Fullscreen } from '@react-three/uikit'
import { Defaults } from '@react-three/uikit-default'
import { createXRStore, TeleportTarget, XR, XROrigin } from '@react-three/xr'
import { Outlet } from '@tanstack/react-router'
import { useState } from 'react'
import { Vector3 } from 'three'

import { Header } from '../components/header'
import { Contexts } from '../contexts'
import { useTunnel } from '../contexts/tunnel'
import { options } from '../utils/xr'

const store = createXRStore(options)

const Layout = () => {
  const [position, setPosition] = useState(new Vector3())
  const tunnel = useTunnel()

  return (
    <Contexts>
      <Canvas
        gl={{ localClippingEnabled: true }}
        shadows
        style={{ flexGrow: 1, height: '100dvh', touchAction: 'none', width: '100dvw' }}
      >
        <XR store={store}>
          {/** {@link https://docs.pmnd.rs/xr/tutorials/teleport} */}
          <XROrigin position={position} />
          <TeleportTarget onTeleport={setPosition} />
          <Fullscreen flexDirection="column">
            <Defaults>
              <Header />
              <tunnel.Out />
            </Defaults>
          </Fullscreen>
          <Outlet />
        </XR>
      </Canvas>
    </Contexts>
  )
}

export default Layout
