export const mediaLibraryPageNavigation = {
  home: {
    path: 'home',
    label: 'Home',
  },
  movies: {
    path: 'movies',
    label: 'Movies',
  },
  series: {
    path: 'series',
    label: 'Series',
  },
  genres: {
    path: 'genres',
    label: 'Genres',
  },
  collections: {
    path: 'collections',
    label: 'Collections',
  },
  watchList: {
    path: 'watch-list',
    label: 'Watch List',
  },
} as const

export const mediaLibrarySectionsNavigation = {
  continueWatching: {
    path: 'continue-watching',
    label: 'Continue Watching',
  },
  forYou: {
    path: 'for-you',
    label: 'For You',
  },
  trending: {
    path: 'trending',
    label: 'Trending',
  },
  recentlyAdded: {
    path: 'recently-added',
    label: 'Recently Added',
  },
  actors: {
    path: 'actors',
    label: 'Actors',
  },
  search: {
    path: 'search',
    label: 'Search',
  },
} as const

export const settingsNavigation = {
  system: {
    path: 'system',
    label: 'System settings',
  },
  user: {
    path: 'user',
    label: 'User management',
  },
  mediaLibrary: {
    path: 'media-library',
    label: 'Media library settings',
  },
  playbackStreaming: {
    path: 'playback-streaming',
    label: 'Playback & streaming settings',
  },
  personalization: {
    path: 'personalization',
    label: 'Personalization settings',
  },
} as const
