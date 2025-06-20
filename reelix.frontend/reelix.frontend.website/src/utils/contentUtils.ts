import {
  mediaLibraryPageNavigation,
  mediaLibrarySectionsNavigation,
} from './../components/navigation/navigationConfig'

export const contentFeedSectionsPerPage = {
  home: [
    mediaLibrarySectionsNavigation.continueWatching,
    mediaLibrarySectionsNavigation.forYou,
    mediaLibrarySectionsNavigation.trending,
    mediaLibrarySectionsNavigation.recentlyAdded,
  ],
  movies: [],
  series: [],
  collections: [],
  watchList: [],
  search: [
    mediaLibraryPageNavigation.movies,
    mediaLibraryPageNavigation.series,
    mediaLibraryPageNavigation.collections,
    mediaLibraryPageNavigation.genres,
    mediaLibrarySectionsNavigation.actors,
  ],
} as const
