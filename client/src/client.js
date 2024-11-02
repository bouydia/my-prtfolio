import sanityClient from '@sanity/client'
import imagUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: import.meta.env.VITE_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiversion: '2022-02-01',
  useCdn: true,
  token: import.meta.env.VITE_APP_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
})

const builder = imagUrlBuilder(client)

export const urlFor = source => builder.image(source)
