import type { XRStoreOptions } from '@react-three/xr'

export const options = {
  controller: { teleportPointer: true },
  hand: {
    rayPointer: { cursorModel: { color: 'white' } },
    teleportPointer: true,
    touchPointer: { cursorModel: { color: 'white' } },
  },
} as const satisfies XRStoreOptions
