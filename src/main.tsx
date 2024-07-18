import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { setPreferredColorScheme } from '@react-three/uikit'
import { XR, createXRStore } from '@react-three/xr'
import { Route, Switch } from 'wouter'

import { MMDChamber } from './pages/chamber/mmd'
import { FiberDemo } from './pages/demo/fiber'
import { UikitDemo } from './pages/demo/uikit'
import { XRDemo } from './pages/demo/xr'
import { XRUikitDemo } from './pages/demo/xr-uikit'
import { Index } from './pages'

setPreferredColorScheme('system')

const store = createXRStore({
  hand: {
    teleportPointer: true,
    rayPointer: { cursorModel: { color: 'black' } },
    touchPointer: { cursorModel: { color: 'black' } },
  },
  controller: { teleportPointer: true },
})

export const Main = () => (
  <>
    <button type="button" onClick={() => store.enterVR()}>Enter VR</button>
    <button type="button" onClick={() => store.enterAR()}>Enter AR</button>
    <Canvas
      // frameloop="demand"
      gl={{ localClippingEnabled: true }}
      style={{ height: '100dvh', width: '100%', flexGrow: 1, touchAction: 'none' }}
    >
      <XR store={store}>
        <Environment preset="city" />
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
  </>
)
