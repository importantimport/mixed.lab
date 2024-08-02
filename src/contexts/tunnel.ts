import { createContextState } from 'foxact/context-state'
import tunnel from 'tunnel-rat'

const [TunnelProvider, useTunnel, useSetTunnel] = createContextState(tunnel())

export { TunnelProvider, useSetTunnel, useTunnel }
