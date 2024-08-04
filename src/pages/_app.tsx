// import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Fullscreen } from '@react-three/uikit'
import { Defaults } from '@react-three/uikit-default'
import {
  createXRStore,
  // IfInSessionMode,
  TeleportTarget,
  XR,
  XROrigin,
} from '@react-three/xr'
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
          {/** doesn't work, @see {@link https://github.com/pmndrs/xr/issues/320} */}
          {/* <IfInSessionMode deny="immersive-ar">
            <Environment
              background
              files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/syferfontein_0d_clear_puresky_1k.hdr"
            // ground
            // resolution={256}
            />
          </IfInSessionMode> */}
          <Outlet />
        </XR>
      </Canvas>
    </Contexts>
  )
}

export default Layout
