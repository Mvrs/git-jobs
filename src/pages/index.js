import { useState } from 'react'
import styles from '../../styles/Home.module.css'
import Layout from '../components/layout/layout'
import Search from '../components/search/search'

export default function Home() {
  const [keyword, setKeyWord] = useState('')

  const onInputChange = e => {
    e.preventDefault()

    setKeyWord(e.target.value.toLowerCase())
  }

  return (
    <Layout>
      <div className={styles.input_container}>
        <div className={styles.input}>
          <Search
            placeholder="Title, companies, expertise or benefits"
            onChange={onInputChange}
          />
        </div>
      </div>
    </Layout>
  )
}
