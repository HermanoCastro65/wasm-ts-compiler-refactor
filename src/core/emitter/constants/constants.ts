// eslint-disable-next-line prefer-spread
export const flatten = (arr: any[]) => [].concat.apply([], arr)

// http://webassembly.github.io/spec/core/binary/types.html#function-types
export const functionType = 0x60

export const emptyArray = 0x0

// https://webassembly.github.io/spec/core/binary/modules.html#binary-module
export const magicModuleHeader = [0x00, 0x61, 0x73, 0x6d]
export const moduleVersion = [0x01, 0x00, 0x00, 0x00]
