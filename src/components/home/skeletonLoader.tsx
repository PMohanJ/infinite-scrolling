import { Skeleton, Stack } from '@chakra-ui/react'
import "./home.css"

const SkeletonLoader = () => {
  return (
    <Stack className='skeleton-width '>
      <Skeleton height='50px' />
      <Skeleton height='50px' />
      <Skeleton height='50px' />
    </Stack>
  )
}

export default SkeletonLoader
