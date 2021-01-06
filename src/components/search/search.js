import { WorkOutlineOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core'
import styles from './search.module.css'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2.2),
    position: 'absolute !important',
  },
}))

function Search({ getNewSearch, setIsDescription, ...props }) {
  const classes = useStyles()

  const handleSubmit = e => {
    e.preventDefault()
    getNewSearch()
  }

  return (
    <div className={styles.wrapper}>
      <form
        className={styles.input_container}
        onSubmit={e => {
          handleSubmit(e)
        }}
      >
        <WorkOutlineOutlined className={classes.root} color="disabled" />
        <input
          type="text"
          className={styles.input}
          onChange={e => setIsDescription(e.target.value)}
          {...props}
        />
        <button id="submit" name="submit" style={{ cursor: 'pointer' }}>
          Search
        </button>
      </form>
    </div>
  )
}

export default Search
