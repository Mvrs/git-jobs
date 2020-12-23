import { WorkOutlineOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core'
import styles from './search.module.css'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2.2),
    position: 'absolute !important',
  },
}))

function Search({ ...props }) {
  const classes = useStyles()

  return (
    <div className={styles.wrapper}>
      <form className={styles.input_container}>
        <WorkOutlineOutlined className={classes.root} color="disabled" />
        <input type="text" className={styles.input} {...props} />
        <button id="submit" name="submit">
          Search
        </button>
      </form>
    </div>
  )
}

export default Search
