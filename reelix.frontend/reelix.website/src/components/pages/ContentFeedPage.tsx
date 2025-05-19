import { contentFeedSectionsPerPage } from '../../utils/contentUtils'
import ContentSection from '../layout/sections/ContentSection'
import MediaThumbnail from '../layout/media/MediaThumbnail'
import { useLocation } from 'react-router-dom'
import Header from '../layout/Header/Header'

type ContentFeedType = keyof typeof contentFeedSectionsPerPage

const ContentFeedPage: React.FC = () => {
  const contentFeedType =
    (useLocation().hash.substring(1) as ContentFeedType) || 'home'
  const contentCategories = contentFeedSectionsPerPage[contentFeedType] || []

  return (
    <div>
      <Header />
      {contentCategories.map((category) => (
        <ContentSection title={category} key={category}>
          <MediaThumbnail />
        </ContentSection>
      ))}
      {contentCategories.length === 0 && (
        <ContentSection>
          <MediaThumbnail />
        </ContentSection>
      )}
    </div>
  )
}

export default ContentFeedPage
