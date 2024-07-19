import { Canvas } from '@react-three/fiber'
import { Fullscreen, setPreferredColorScheme } from '@react-three/uikit'
import { Defaults } from '@react-three/uikit-default'
import { TeleportTarget, XR, XROrigin, createXRStore } from '@react-three/xr'
import { useState } from 'react'
import { Vector3 } from 'three'
import { Route, Switch } from 'wouter'

import { Contexts } from './components/contexts'
import { Header } from './components/header'

import { MMDChamber } from './pages/chamber/mmd'
import { FiberDemo } from './pages/demo/fiber'
import { UikitDemo } from './pages/demo/uikit'
import { XRDemo } from './pages/demo/xr'
import { XRUikitDemo } from './pages/demo/xr-uikit'
import { Index } from './pages'
import { options } from './utils/xr'

setPreferredColorScheme('system')

const store = createXRStore(options)

export const Main = () => {
  const [position, setPosition] = useState(new Vector3())

  return (
    <Contexts>
      <Canvas
        // frameloop="demand"
        gl={{ localClippingEnabled: true }}
        style={{ height: '100dvh', width: '100dvw', flexGrow: 1, touchAction: 'none' }}
      >
        <XR store={store}>
          {/** {@link https://docs.pmnd.rs/xr/tutorials/teleport} */}
          <XROrigin position={position} />
          <TeleportTarget onTeleport={setPosition} />
          <Fullscreen flexDirection="column">
            <Defaults>
              <Header />
            </Defaults>
          </Fullscreen>
          <Switch>
            <Route path="/chamber/mmd" component={MMDChamber} />
            <Route path="/demo/fiber" component={FiberDemo} />
            <Route path="/demo/uikit" component={UikitDemo} />
            <Route path="/demo/xr" component={XRDemo} />
            <Route path="/demo/xr-uikit" component={XRUikitDemo} />
            <Route path="/" component={Index} />
          </Switch>
        </XR>
      </Canvas>
    </Contexts>
  )
}
