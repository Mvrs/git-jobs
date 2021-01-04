import { useEffect, useState } from 'react'
import Link from 'next/link'
import Layout from '../../components/layout/layout'
import styles from './positions.module.css'
// import card_style from '../../components/jobs/jobs.module.css'
import PublicRoundedIcon from '@material-ui/icons/PublicRounded'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import AccessTimeIcon from '@material-ui/icons/AccessTime'
import { makeStyles } from '@material-ui/core'
import { days_passed } from '../../components/jobs/jobs'

async function getJob(id) {
  const result = await fetch(
    `https://jobs.github.com/positions/${id}.json?markdown=true`,
  )
  const job = await result.json()

  console.log(job)

  console.log(id)
  return job
}

const useStyles = makeStyles(theme => ({
  root: {
    // margin: theme.spacing(2.2),
    // display: 'inline-flex',
    // display: 'inline-flex',
    // position: 'relative',
    marginTop: '26px',
  },
  date_posted: {
    marginTop: '16px',
  },
  location: {
    marginTop: 0,
  },
}))

function Job({ job }) {
  const classes = useStyles()
  var today = new Date()

  console.log(job)
  return (
    <Layout title={job.title}>
      <Link href="/">
        <a style={{ color: '#1e86ff', fontSize: '14px' }}>
          &larr;&nbsp;&nbsp;&nbsp;Back to search
        </a>
      </Link>
      <div className={styles.apply_container}>
        <div className={styles.how_to_apply}>How to Apply</div>
        <div className={styles.description} id="description">
          <ReactMarkdown
            plugins={[gfm]}
            children={job.how_to_apply}
            allowDangerousHtml
          />
        </div>
      </div>

      <div className={styles.job_container}>
        <div className={styles.title_heading}>{job.title}</div>
        <button className={styles.job_type}>Full time</button>
        <div className={styles.info_container}>
          <AccessTimeIcon className={classes.date_posted} color="disabled" />
          <div className={styles.location}>
            {days_passed(today.getTime(), job.created_at) > today.getUTCDate()
              ? `${days_passed(today.getTime(), job.created_at)} days ago `
              : `${days_passed(today.getTime(), job.created_at)} hrs`}
          </div>
        </div>
      </div>

      <div className={styles.row}>
        {job.company_logo ? (
          <div className={styles.company_logo}>
            <img src={job.company_logo} alt={job.company} />
          </div>
        ) : (
          <div className={styles.company_logo_not_found}>
            <img src={job.company_logo} />
            <p className={styles.text}>not found</p>
          </div>
        )}
        <div className={styles.job_info_container}>
          <div className={styles.company}>{job.company}</div>
          <div className={styles.info_container}>
            <PublicRoundedIcon className={classes.location} color="disabled" />
            <div className={styles.job_location}>{job.location}</div>
          </div>
        </div>
      </div>

      <div className={styles.job_description}>
        <p className={styles.job_company_info}>
          <ReactMarkdown plugins={[gfm]} children={job.description} />
        </p>
      </div>
    </Layout>
  )
}

export default Job

export async function getStaticPaths() {
  const result = await fetch('https://jobs.github.com/positions.json')
  const jobs = await result.json()

  const paths = jobs.map(job => ({
    params: { id: job.id },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const job = await getJob(params.id)

  return {
    props: {
      job,
    },
  }
}
