import './Skeleton.scss'
import React from 'react'
import LoadingSkeleton from 'react-loading-skeleton'

interface SkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
}
const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  height,
  width,
}) => {
  return (
    <LoadingSkeleton
      className={`skeleton-item ${className}`}
      height={height}
      width={width}
      baseColor="#123123" // TODO: Replace later
      highlightColor="#456789" // TODO: Replace later
    />
  )
}

export default Skeleton
