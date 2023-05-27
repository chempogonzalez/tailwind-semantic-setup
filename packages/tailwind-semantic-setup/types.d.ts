export type SemanticSetup = {
  semanticSetup: {
    plugins?: Partial<{
      typography: boolean
      forms: boolean
      'line-clamp': boolean
      'aspect-ratio': boolean
    }>,
    themes: Array<{
      name: string
      preferredColorScheme?: Array<string>
      colors: { [key: string]: string }
    }>
  }
}
