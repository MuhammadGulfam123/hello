import Head from 'next/head'
import Image from 'next/image'
import Abc from '../Components/Abc'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Abc/>
    </div>
  )
}
