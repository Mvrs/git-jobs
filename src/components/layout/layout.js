import Head from "next/head";
import styles from "./layout.module.css";
import PropTypes from "prop-types";
import Link from "next/link";

function Layout({ children, title = "Github Jobs" }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>

      <div>
        <span
          style={{
            marginBottom: 10,
            backgroundColor: "#9055A2",
            display: "flex",
            flex: 1,
            color: "white",
            borderRadius: 4,
            justifyContent: "center",
          }}
        >
          GitJobs API has shut down. So heres a link to my &nbsp;
          <a
            className={styles.repo}
            style={{ textDecoration: "underline" }}
            href="https://github.com/Mvrs/git-jobs"
            target="_blank"
          >
            code
          </a>
        </span>
      </div>
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
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Layout;
