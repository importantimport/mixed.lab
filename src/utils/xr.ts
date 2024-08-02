import type { XRStoreOptions } from '@react-three/xr'

export const options = {
  controller: { teleportPointer: true },
  emulate: 'metaQuest3',
  hand: {
    rayPointer: { cursorModel: { color: 'white' } },
    teleportPointer: true,
    touchPointer: { cursorModel: { color: 'white' } },
  },
} as const satisfies XRStoreOptions
