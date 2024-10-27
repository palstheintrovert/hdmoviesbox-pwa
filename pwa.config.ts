import type { Config } from './types';

export default {
  version: '1.0',
  id: '/',
  name: 'HD Movies Box: Stream & Discover the Latest English, Hindi, and Bangla Movies in HD',
  shortName: 'HD Movies Box',
  description: 'Explore a wide range of English, Hindi, and Bangla movies in HD quality. Stay updated with the latest releases, movie reviews, and entertainment news. Watch and enjoy top-rated films online.',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Action Movies',
      shortName: 'action',
      description: 'watch exciting action packed blockbusters',
      url: '/search/label/action',
    },
    {
      name: 'Shortcut 2',
      shortName: 'Shortcut 2',
      description: 'Shortcut 2 description goes here...',
      url: '/search/label/shortcut-2?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '********-****-****-****-************',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://hdmoviesbox.blogspot.com/',
} satisfies Config;
