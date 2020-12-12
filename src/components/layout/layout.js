import Head from 'next/head'
import styles from './layout.module.css'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Layout({ children, title = 'Github Jobs' }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <a>
            Github <b style={{ fontWeight: 300 }}>Jobs</b>
          </a>
        </Link>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        Marlon Johnson @ devchallenghes.io
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

export default Layout
