import React from 'react'
import PropTypes from 'prop-types'
import styles from './location.module.css'
import PublicRoundedIcon from '@material-ui/icons/PublicRounded'
import { makeStyles } from '@material-ui/core'
import { useState } from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2.2),
    position: 'absolute !important',
  },
}))

function Location({
  location,
  onChange,
  positions,
  isLocation,
  setIsLocation,
  ...props
}) {
  const classes = useStyles()
  const [value, setValue] = useState('')
  const [selections, setSelections] = useState([])

  const handleNewLocation = e => {
    e.preventDefault()
    setSelections(Array.from(new Set([value, ...selections])))
    onChange(value)
    setValue('')
  }

  const onReset = e => {
    e.preventDefault()
    setIsLocation('')
  }

  return (
    <div className={styles.location_container}>
      <span>
        <p className={styles.location_title}>Location</p>
      </span>
      <form
        className={styles.location_input_container}
        onSubmit={handleNewLocation}
      >
        <PublicRoundedIcon className={classes.root} color="disabled" />
        <input
          name="location"
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          className={styles.location_input}
          {...props}
        />
      </form>

      {/* These are here by default */}
      <div className={styles.location_options_container}>
        <form>
          {selections.map(s => (
            <div key={s}>
              <input
                type="radio"
                id={s}
                name="select"
                value={s}
                checked={isLocation === s}
                onChange={e => {
                  onChange(e.target.value)
                  setIsLocation(e.target.value)
                }}
                className={styles.location_option}
              />
              <label htmlFor={s}>&nbsp;&nbsp;{s}</label>
            </div>
          ))}
          <input
            type="radio"
            id="London"
            name="London"
            value="London"
            checked={isLocation === 'London'}
            onChange={e => {
              onChange(e.target.value)
              setIsLocation(e.target.value)
            }}
            className={styles.location_option}
          />
          <label htmlFor="London">&nbsp;&nbsp;London</label>
          <br />
          <input
            type="radio"
            id="Amsterdam"
            name="Amsterdam"
            value="Amsterdam"
            checked={isLocation === 'Amsterdam'}
            onChange={e => {
              onChange(e.target.value)
              setIsLocation(e.target.value)
            }}
            className={styles.location_option}
          />
          <label htmlFor="Amsterdam">&nbsp;&nbsp;Amsterdam</label>
          <br />

          <input
            type="radio"
            id="New York"
            name="New York"
            value="New York"
            checked={isLocation === 'New York'}
            onChange={e => {
              onChange(e.target.value)
              setIsLocation(e.target.value)
            }}
            className={styles.location_option}
          />
          <label htmlFor="New York">&nbsp;&nbsp;New York</label>
          <br />

          <input
            type="radio"
            id="Berlin"
            name="Berlin"
            value="Berlin"
            checked={isLocation === 'Berlin'}
            onChange={e => {
              onChange(e.target.value)
              setIsLocation(e.target.value)
            }}
            // className={styles.location_option}
          />
          <label htmlFor="Berlin" className={styles.location_option}>
            &nbsp;&nbsp;Berlin
          </label>
          <br />
          <button className={styles.reset_button} onClick={onReset}>
            Reset
          </button>
        </form>
      </div>
    </div>
  )
}

export default Location

Location.propTypes = {
  location: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  setIsLocation: PropTypes.func,
}
