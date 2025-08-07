import styles from './Loader.module.css'

type LoaderProps = {
  isLoading: boolean
}

export default function Loader({ isLoading }: LoaderProps) {
  return (
    <div className={styles.loader}></div>
  )
}