import { useState } from 'react'
import styles from '../../styles/Home.module.css'
import Jobs from '../../src/components/jobs/jobs'
import JobType from '../components/job-type/job-type'
import Layout from '../components/layout/layout'
import Location from '../components/location/location'
import Search from '../components/search/search'

export default function Home({ positions }) {
  const [keyword, setKeyWord] = useState('')

  const onInputChange = e => {
    e.preventDefault()

    setKeyWord(e.target.value.toLowerCase())
  }

  console.log('jobs: ', positions)

  return (
    <Layout>
      <div className={styles.input_container}>
        <div className={styles.input}>
          <Search
            placeholder="Title, companies, expertise or benefits"
            onChange={onInputChange}
          />
          <JobType />
          <Location
            placeholder="City, state, zip code or country"
            onChange={onInputChange}
          />
        </div>
      </div>
      <Jobs positions={positions} />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jobs.github.com/positions.json')
  const positions = await res.json()
  return {
    props: {
      positions,
    },
  }
}
