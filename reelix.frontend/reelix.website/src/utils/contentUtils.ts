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
}
