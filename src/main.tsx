import { Canvas } from '@react-three/fiber'
import { Route, Switch } from 'wouter'
import { XR, createXRStore } from '@react-three/xr'

import { FiberDemo } from './pages/demo/fiber'
import { UikitDemo } from './pages/demo/uikit'
import { XRDemo } from './pages/demo/xr'
import { Index } from './pages'

const store = createXRStore()

export const Main = () => (
  <>
    <button type="button" onClick={() => store.enterVR()}>Enter VR</button>
    <button type="button" onClick={() => store.enterAR()}>Enter AR</button>
    <Canvas gl={{ localClippingEnabled: true }}>
      <XR store={store}>
        <Switch>
          <Route path="/demo/fiber" component={FiberDemo} />
          <Route path="/demo/uikit" component={UikitDemo} />
          <Route path="/demo/xr" component={XRDemo} />
          <Route path="/" component={Index} />
        </Switch>
      </XR>
    </Canvas>
  </>
)
