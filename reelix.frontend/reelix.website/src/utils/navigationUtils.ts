export type NavigationItem = {
  label: string
  value: string
}

export const mediaLibraryNavigation: NavigationItem[] = [
  { label: 'Home', value: 'home' },
  { label: 'Movies', value: 'movies' },
  { label: 'Series', value: 'series' },
  { label: 'Genres', value: 'genres' },
  { label: 'Collections', value: 'collections' },
  { label: 'Watch list', value: 'watchlist' },
]

export const contentFeedPageSectionNavigation: NavigationItem[] = [
  { label: 'Continue watching', value: 'continue-watching' },
  { label: 'For you', value: 'for-you' },
  { label: 'Trending', value: 'trending' },
  { label: 'Recently added', value: 'recently-added' },
]

export const settingsNavigation: NavigationItem[] = []
