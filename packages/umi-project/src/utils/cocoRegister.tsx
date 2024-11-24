import coco from './coco'
import Test1 from '@/components/Test1'
import Test2 from '@/components/Test2'

const register = () => {
  coco('react-component1', Test1)
  coco('react-component2', Test2)
}

export default register
