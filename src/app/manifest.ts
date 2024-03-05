import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tim Niedermeier, Internet of Things, Web Development, App Design',
    short_name: 'Tim Niedermeier - Portfolio',
    description: 'Portfolio von Tim Niedermeier, Student mit Fokus auf Internet der Dinge (IoT). Erfahrung in Webdesign, App-Design und Physical Computing.',
    start_url: 'https://niedermeier.dev',  
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
    display: 'standalone',
    theme_color: 'rgba(251, 251, 253, 0.8)',
    background_color: 'rgba(251, 251, 253, 0.8)',
  }
}