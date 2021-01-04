import Link from 'next/link'
import PublicRoundedIcon from '@material-ui/icons/PublicRounded'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import { makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import styles from './jobs.module.css'

const useStyles = makeStyles(theme => ({
  root: {
    // margin: theme.spacing(2.2),
    // display: 'inline-flex',
    // display: 'inline-flex',
    // position: 'relative',
    marginTop: '26px',
  },
  date_posted: {
    marginTop: '26px',

    marginLeft: '28px',
  },
}))

export function days_passed(currentDate, pastDate) {
  let current = new Date(currentDate)
  let previous = new Date(pastDate)

  let difference = current.getTime() - previous.getTime()
  const hours = Math.floor(difference / 3600) % 24

  let days = Math.floor(difference / (1000 * 3600 * 24))

  return days >= hours ? days : hours
}

const Jobs = ({ positions }) => {
  // const [direction, setDirection] = useState(null)
  // const [value, setValue] = useState(null)
  const classes = useStyles()
  var today = new Date()

  return (
    <div>
      {positions
        ? positions.map(job => (
            <Link href={`positions/${job.id}`} key={job.id}>
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
                  <div className={styles.title}>{job.title}</div>
                  <button className={styles.job_type}>{job.type}</button>

                  <div className={styles.info_container}>
                    <PublicRoundedIcon
                      className={classes.root}
                      color="disabled"
                    />
                    <div className={styles.location}>{job.location}</div>

                    <AccessTimeIcon
                      className={classes.date_posted}
                      color="disabled"
                    />
                    <div className={styles.location}>
                      {days_passed(today.getTime(), job.created_at) >
                      today.getUTCDate()
                        ? `${days_passed(
                            today.getTime(),
                            job.created_at,
                          )} days ago `
                        : `${days_passed(today.getTime(), job.created_at)} hrs`}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        : null}
    </div>
  )
}

export default Jobs

Jobs.propTypes = {
  positions: PropTypes.array,
}
