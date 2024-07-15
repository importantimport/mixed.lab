import { Link, Route, Switch } from 'wouter'

import { FiberDemo } from './pages/demo/fiber'
import { UikitDemo } from './pages/demo/uikit'

/** Example from {@link https://docs.pmnd.rs/react-three-fiber/getting-started/introduction} */
export const Main = () => (
  <Switch>
    <Route path="/demo/fiber">
      <FiberDemo />
    </Route>
    <Route path="/demo/uikit">
      <UikitDemo />
    </Route>
    <Route>
      <h1>Mixed.Lab</h1>
      <ul>
        <li>
          <Link href="/demo/fiber">Fiber Demo</Link>
        </li>
        <li>
          <Link href="/demo/uikit">Uikit Demo</Link>
        </li>
      </ul>
    </Route>
  </Switch>
)
