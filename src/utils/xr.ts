import type { XRStoreOptions } from '@react-three/xr'

export const options = {
  controller: { teleportPointer: true },
  hand: {
    rayPointer: { cursorModel: { color: 'black' } },
    teleportPointer: true,
    touchPointer: { cursorModel: { color: 'black' } },
  },
} as const satisfies XRStoreOptions
