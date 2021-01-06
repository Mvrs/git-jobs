import PropTypes from 'prop-types'
import styles from './job-type.module.css'

function JobType({ full_time, set_full_time }) {
  return (
    <div className={styles.job_container}>
      <input
        id="ft"
        type="checkbox"
        onChange={e => {
          set_full_time(e.target.checked)
        }}
        checked={full_time}
      />
      <label htmlFor="Full Time">&nbsp;&nbsp;Full Time</label>
    </div>
  )
}

export default JobType

JobType.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}
