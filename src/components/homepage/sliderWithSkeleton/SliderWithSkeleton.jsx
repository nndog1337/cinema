import SkeletonSlider from '../../../ui/Skeleton/SkeletonSlider/SkeletonSlider'
import SliderFilms from '../sectionSlider/SliderFilms'
import styles from './style.module.css'

const SliderWithSkeleton = (Props) => {
  const{
    isLoadingSlider,
    randomFilms
  } = Props
  return (
    <div className={styles.sliderWrapper}>
        {isLoadingSlider ? (
          <div className={styles.recomedationWrapper}>
            <SkeletonSlider/>
          </div>
          ) : (
          <SliderFilms randomFilms={randomFilms}/>
        )}
      </div>
  )
}

export default SliderWithSkeleton
