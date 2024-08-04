import { Canvas } from '@react-three/fiber'
import { Fullscreen } from '@react-three/uikit'
import { Defaults } from '@react-three/uikit-default'
import { createXRStore, TeleportTarget, XR, XROrigin } from '@react-three/xr'
import { useState } from 'react'
import { Vector3 } from 'three'
import { Route, Switch } from 'wouter'

import { Header } from './components/header'
import { Contexts } from './contexts'
import { useTunnel } from './contexts/tunnel'
import { Index } from './pages'
import { MMDChamber } from './pages/chamber/mmd'
import { SettingsChamber } from './pages/chamber/settings'
import { FiberDemo } from './pages/demo/fiber'
import { UikitDemo } from './pages/demo/uikit'
import { XRDemo } from './pages/demo/xr'
import { options } from './utils/xr'

const store = createXRStore(options)

export const Main = () => {
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
          <Switch>
            <Route component={MMDChamber} path="/chamber/mmd" />
            <Route component={SettingsChamber} path="/chamber/settings" />
            <Route component={FiberDemo} path="/demo/fiber" />
            <Route component={UikitDemo} path="/demo/uikit" />
            <Route component={XRDemo} path="/demo/xr" />
            <Route component={Index} path="/" />
          </Switch>
        </XR>
      </Canvas>
    </Contexts>
  )
}
