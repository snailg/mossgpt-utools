export interface IConfig {
  model?: string
  apiBaseUrl?: string
  prompt?: string
  max_tokens?: number
  temperature?: number
  top_p?: number
  presence_penalty?: number
  frequency_penalty?: number
  proxy?: {
    host?: string
    port?: string
    open: boolean
    username?: string
    password?: string
  }
}

