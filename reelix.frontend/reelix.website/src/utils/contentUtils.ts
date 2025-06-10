import {
  contentFeedPageSectionNavigation,
  NavigationItem,
} from './navigationUtils'

export const contentFeedSectionsPerPage: {
  [key: string]: NavigationItem[]
} = {
  home: contentFeedPageSectionNavigation,
  movies: [],
  series: [],
  genres: [
    // TODO: Pull from API instead, to get all existing genres on the server.
    { label: 'Action', value: 'action' },
    { label: 'Comedy', value: 'comedy' },
    { label: 'Drama', value: 'drama' },
    { label: 'Horror', value: 'horror' },
  ],
  collections: [],
  watchList: [],
  search: [
    { label: 'Movies', value: 'movies' },
    { label: 'Series', value: 'series' },
    { label: 'Collections', value: 'collections' },
    { label: 'Genres', value: 'genres' },
    { label: 'Actors', value: 'actors' },
  ],
}
