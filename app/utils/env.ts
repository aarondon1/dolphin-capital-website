// Environment variables validation and type safety
interface EnvironmentVariables {
  NODE_ENV: 'development' | 'production' | 'test'
  NEXT_PUBLIC_SITE_URL?: string
  GOOGLE_VERIFICATION_TOKEN?: string
  ANALYTICS_ID?: string
}

function validateEnv(): EnvironmentVariables {
  const env = process.env as any

  // Validate required environment variables
  const requiredVars = ['NODE_ENV']
  const missing = requiredVars.filter(key => !env[key])
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`)
  }

  // Validate NODE_ENV values
  if (!['development', 'production', 'test'].includes(env.NODE_ENV)) {
    throw new Error(`Invalid NODE_ENV: ${env.NODE_ENV}`)
  }

  return {
    NODE_ENV: env.NODE_ENV,
    NEXT_PUBLIC_SITE_URL: env.NEXT_PUBLIC_SITE_URL,
    GOOGLE_VERIFICATION_TOKEN: env.GOOGLE_VERIFICATION_TOKEN,
    ANALYTICS_ID: env.ANALYTICS_ID,
  }
}

export const env = validateEnv()
