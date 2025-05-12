import { useLocation } from 'react-router-dom'
import Header from '../layout/Header/Header'

const ContentFeedPage: React.FC = () => {
  const contentFeedType = useLocation().hash.substring(1)

  return (
    <div>
      <Header />
      <h1>{contentFeedType}</h1>
    </div>
  )
}

export default ContentFeedPage
