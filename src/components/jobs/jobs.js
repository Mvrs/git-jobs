// import Link from 'next/link'
// import TimeAgo from 'javascript-time-ago'
// import en from 'javascript-time-ago/locale/en'
// import PublicRoundedIcon from '@material-ui/icons/PublicRounded'
// import AccessTimeIcon from '@material-ui/icons/AccessTime'
// import { makeStyles } from '@material-ui/core'
// import PropTypes from 'prop-types'
// import styles from './jobs.module.css'

// const useStyles = makeStyles(theme => ({
//   root: {
//     marginTop: '26px',
//   },
//   date_posted: {
//     marginTop: '26px',

//     marginLeft: '28px',
//   },
// }))

// TimeAgo.addLocale(en)

// const Jobs = ({ positions }) => {
//   const classes = useStyles()

//   const timeAgo = new TimeAgo('en-US')

//   return (
//     <div>
//       {positions
//         ? positions.map(job => (
//             <Link href={`positions/${job.id}`} key={job.id}>
//               <div className={styles.row}>
//                 {job.company_logo ? (
//                   <div className={styles.company_logo}>
//                     <img src={job.company_logo} alt={job.company} />
//                   </div>
//                 ) : (
//                   <div className={styles.company_logo_not_found}>
//                     <img src={job.company_logo} />
//                     <p className={styles.text}>not found</p>
//                   </div>
//                 )}
//                 <div className={styles.job_info_container}>
//                   <div className={styles.company}>{job.company}</div>
//                   <div className={styles.title}>{job.title}</div>
//                   <button className={styles.job_type}>{job.type}</button>

//                   <div className={styles.info_container}>
//                     <PublicRoundedIcon
//                       className={classes.root}
//                       color="disabled"
//                     />
//                     <div className={styles.location}>{job.location}</div>

//                     <AccessTimeIcon
//                       className={classes.date_posted}
//                       color="disabled"
//                     />
//                     <div className={styles.location}>
//                       {timeAgo.format(Date.parse(job.created_at))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))
//         : null}
//     </div>
//   )
// }

// export default Jobs

// Jobs.propTypes = {
//   positions: PropTypes.array,
// }
