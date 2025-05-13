import { contentFeedSectionsPerPage } from '../../utils/contentUtils'
import ContentSection from '../layout/sections/ContentSection'
import { useLocation } from 'react-router-dom'
import Header from '../layout/Header/Header'
import skeleton from 'react-loading-skeleton'
import Skeleton from 'react-loading-skeleton'

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
          {category}
        </ContentSection>
      ))}
      {contentCategories.length === 0 && (
        <ContentSection>{Skeleton({ count: 14 })}</ContentSection>
      )}
    </div>
  )
}

export default ContentFeedPage
