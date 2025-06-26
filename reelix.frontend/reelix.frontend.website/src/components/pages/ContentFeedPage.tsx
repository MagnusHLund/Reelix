import MediaLibraryHeader from '../layout/Header/MediaLibraryHeader'
import ContentSection from '../layout/sections/ContentSection'
import Thumbnail from '../layout/common/Thumbnail'
import { useLocation } from 'react-router-dom'
import './ContentFeedPage.scss'
import {
  mediaLibraryPageNavigation,
  mediaLibrarySectionsNavigation,
} from '../navigation/navigationConfig'

const ContentFeedPage: React.FC = () => {
  const location = useLocation().pathname

  const contentFeedSectionsPerPage = {
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

  type ContentFeedType = keyof typeof contentFeedSectionsPerPage

  const contentFeedType = (location.substring(1) as ContentFeedType) || 'home'
  const contentCategories = contentFeedSectionsPerPage[contentFeedType] || []

  // TODO: Call api with the category feed type, to fetch the content
  const mediaThumbnails = Array(15).fill(
    // Max 15 is probably a good idea
    <Thumbnail PrimaryText='' SecondaryText='' imageUrl='' />
  )

  return (
    <div className='content-feed__page'>
      <MediaLibraryHeader />
      <div className='content-feed__container'>
        {contentCategories.map((category) => (
          <ContentSection key={category.path} title={category.label} navigateTo={category.path}>
            {mediaThumbnails}
          </ContentSection>
        ))}
        {contentCategories.length === 0 && (
          <ContentSection
            scrollDirection='vertical'
            title={
              [
                ...Object.values(mediaLibrarySectionsNavigation),
                ...Object.values(mediaLibraryPageNavigation),
              ].filter((section) => section.path == location)[0]?.label
            }
          >
            {mediaThumbnails}
          </ContentSection>
        )}
      </div>
    </div>
  )
}

export default ContentFeedPage
