import Loader from '@/components/shared/Loader'
import dynamic from 'next/dynamic'

const Projects = dynamic(
  () => import('@/components/shared/Projects'),
  { loading: () => <Loader />, ssr: false }
)

const page = () => {
  return (
    <div>
      <Projects />
    </div>
  )
}

export default page
