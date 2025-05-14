import './Skeleton.scss'
import React from 'react'
import LoadingSkeleton from 'react-loading-skeleton'

interface SkeletonProps {
  className?: string
}
const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => {
  return <LoadingSkeleton className={`skeleton-item ${className}`} />
}

export default Skeleton
