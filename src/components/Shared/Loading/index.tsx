import Lottie from 'lottie-react'
import LoadingAnimation from '../../../json/loading.json'
import * as Styles from './styles'

export default function Loading() {
   return (
      <Styles.LoadingWrapper>
         <Lottie animationData={LoadingAnimation} loop />
      </Styles.LoadingWrapper>
   )
}
