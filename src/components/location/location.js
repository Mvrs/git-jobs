import styles from './location.module.css'
import PublicRoundedIcon from '@material-ui/icons/PublicRounded'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2.2),
    position: 'absolute !important',
  },
}))

function Location({ ...props }) {
  const classes = useStyles()

  return (
    <div className={styles.location_container}>
      <span>
        <p className={styles.location_title}>Location</p>
      </span>
      <form className={styles.location_input_container}>
        <PublicRoundedIcon className={classes.root} color="disabled" />
        <input type="text" className={styles.location_input} {...props} />
      </form>

      <div className={styles.location_options_container}>
        <form>
          <input
            type="radio"
            id="London"
            name="London"
            value="London"
            className={styles.location_option}
          />
          <label htmlFor="London">&nbsp;&nbsp;London</label>
          <br />
          <input
            type="radio"
            id="Amsterdam"
            name="Amsterdam"
            value="Amsterdam"
            className={styles.location_option}
          />
          <label htmlFor="Amsterdam">&nbsp;&nbsp;Amsterdam</label>
          <br />

          <input
            type="radio"
            id="New York"
            name="New York"
            value="New York"
            className={styles.location_option}
          />
          <label htmlFor="New York">&nbsp;&nbsp;New York</label>
          <br />

          <input
            type="radio"
            id="Berlin"
            name="Berlin"
            value="Berlin"
            // className={styles.location_option}
          />
          <label htmlFor="Berlin" className={styles.location_option}>
            &nbsp;&nbsp;Berlin
          </label>
        </form>
      </div>
    </div>
  )
}

export default Location
