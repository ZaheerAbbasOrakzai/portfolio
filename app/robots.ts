import { MetadataRoute } from 'next'
import { generateRobotsConfig } from '../lib/seo'

export default function robots(): MetadataRoute.Robots {
  return generateRobotsConfig()
}
