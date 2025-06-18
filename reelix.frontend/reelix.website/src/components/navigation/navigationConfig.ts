import ContentFeedPage from '../pages/ContentFeedPage'
import SettingsPage from '../pages/SettingsPage'

export const mediaLibraryPageNavigation = {
  home: {
    path: '/home',
    label: 'Home',
    component: ContentFeedPage,
  },
  movies: {
    path: '/movies',
    label: 'Movies',
    component: ContentFeedPage,
  },
  series: {
    path: '/series',
    label: 'Series',
    component: ContentFeedPage,
  },
  genres: {
    path: '/genres',
    label: 'Genres',
    component: ContentFeedPage,
  },
  collections: {
    path: '/collections',
    label: 'Collections',
    component: ContentFeedPage,
  },
  watchList: {
    path: '/watch-list',
    label: 'Watch list',
    component: ContentFeedPage,
  },
} as const

export const mediaLibrarySectionsNavigation = {
  continueWatching: {
    path: '/continue-watching',
    label: 'Continue watching',
    component: ContentFeedPage,
  },
  forYou: {
    path: '/for-you',
    label: 'For you',
    component: ContentFeedPage,
  },
  trending: {
    path: '/trending',
    label: 'Trending',
    component: ContentFeedPage,
  },
  recentlyAdded: {
    path: '/recently-added',
    label: 'Recently added',
    component: ContentFeedPage,
  },
  actors: {
    path: '/actors',
    label: 'Actors',
    component: ContentFeedPage,
  },
  search: {
    path: '/search',
    label: 'Search',
    component: ContentFeedPage,
  },
} as const

export const settingsNavigation = {
  user: {
    path: '/settings/user',
    label: 'User management',
    component: SettingsPage,
  },
  mediaLibrary: {
    path: '/settings/media-library',
    label: 'Media library settings',
    component: SettingsPage,
  },
  playbackStreaming: {
    path: '/settings/playback-streaming',
    label: 'Playback & streaming settings',
    component: SettingsPage,
  },
  personalization: {
    path: '/settings/personalization',
    label: 'Personalization settings',
    component: SettingsPage,
  },
  system: {
    path: '/settings/system',
    label: 'System settings',
    component: SettingsPage,
  },
} as const

export const navigationConfig = [
  ...Object.values(mediaLibraryPageNavigation),
  ...Object.values(mediaLibrarySectionsNavigation),
  ...Object.values(settingsNavigation),
]
