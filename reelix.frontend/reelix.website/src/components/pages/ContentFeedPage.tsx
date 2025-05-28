import { contentFeedSectionsPerPage } from '../../utils/contentUtils'
import ContentSection from '../layout/sections/ContentSection'
import MediaThumbnail from '../layout/media/MediaThumbnail'
import { useLocation } from 'react-router-dom'
import Header from '../layout/Header/Header'
import './ContentFeedPage.scss'

type ContentFeedType = keyof typeof contentFeedSectionsPerPage

const ContentFeedPage: React.FC = () => {
  const contentFeedType =
    (useLocation().hash.substring(1) as ContentFeedType) || 'home'
  const contentCategories = contentFeedSectionsPerPage[contentFeedType] || []

  // TODO: Call api with the category feed type, to fetch the content
  const mediaThumbnails = Array(15).fill(
    // Max 15 is probably a good idea
    <MediaThumbnail title="" releaseYear="" imageUrl="" />
  )

  return (
    <div className="content-feed__page">
      <Header />
      <div className="content-feed__container">
        {contentCategories.map((category) => (
          <ContentSection title={category} key={category}>
            {mediaThumbnails}
          </ContentSection>
        ))}
        {contentCategories.length === 0 && (
          <ContentSection scrollDirection="vertical">
            {mediaThumbnails}
          </ContentSection>
        )}
      </div>
    </div>
  )
}

export default ContentFeedPage
