import { Skeleton, Stack } from '@chakra-ui/react'
import "./home.css"

const SkeletonLoader = () => {
  return (
    <Stack className="list-center">
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
    </Stack>
  )
}

export default SkeletonLoader
