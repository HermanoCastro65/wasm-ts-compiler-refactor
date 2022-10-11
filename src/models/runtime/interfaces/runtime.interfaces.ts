interface IPrintFunction {
  (output: string | number): void
}

export interface IEnvironment {
  print: IPrintFunction
  display: Uint8Array
}

interface ITickFunction {
  (): void
}

export interface IRuntime {
  (src: string, environment: IEnvironment): Promise<ITickFunction>
}
