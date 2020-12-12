import styles from './job-type.module.css'

function JobType() {
  return (
    <div className={styles.job_container}>
      <input type="checkbox" name="Full Time" value="Full Time" />
      <label htmlFor="Full Time">&nbsp;&nbsp;Full Time</label>
    </div>
  )
}

export default JobType
