interface IPrintFunction {
  (output: string | number): void
}

interface IEnvironment {
  print: IPrintFunction
  display: Uint8Array
}

interface ITickFunction {
  (): void
}

export interface IRuntime {
  (src: string, environment: IEnvironment): Promise<ITickFunction>
}
