export type SemanticSetup = {
  semanticSetup: {
    themes: Array<{
      name: string
      preferredColorScheme?: Array<string>
      colors: { [key: string]: string }
    }>
  }
}
