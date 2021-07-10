<!-- Please update value in the {}  -->

<h1 align="center">Git Jobs</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<br>

> _GitHub Jobs is deprecated! New jobs will not be posted from May 19, 2021. It will shut down entirely on August 19, 2021._

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [How to use](#how-to-use)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot](https://user-images.githubusercontent.com/5723692/103759063-f60c0080-4fc7-11eb-8dc2-6a6c206c5022.png)

This was my first attempt diving into NextJs.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)

## Functionality that does the Job (get it 😅)

_sadly I had to remove this file once the API shutdown an order to keep the site up_

```javascript
import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../../components/layout/layout";
import styles from "./positions.module.css";
import PublicRoundedIcon from "@material-ui/icons/PublicRounded";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { makeStyles } from "@material-ui/core";

async function getJob(id) {
  const result = await fetch(
    `https://jobs.github.com/positions/${id}.json?markdown=true`,
  );
  const job = await result.json();

  console.log(job);

  console.log(id);
  return job;
}

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "26px",
  },
  date_posted: {
    marginTop: "16px",
  },
  location: {
    marginTop: "5px",
  },
}));

TimeAgo.addLocale(en);

function Job({ job }) {
  const classes = useStyles();
  const timeAgo = new TimeAgo("en-US");

  return (
    <Layout title={job.title}>
      <div className={styles.container}>
        <div className={styles.container_left}>
          <Link href="/">
            <a style={{ color: "#1e86ff", fontSize: "14px" }}>
              &larr;&nbsp;&nbsp;&nbsp;Back to search
            </a>
          </Link>
          <div className={styles.apply_container}>
            <div className={styles.how_to_apply}>How to Apply</div>
            <div className={styles.description} id="description">
              <ReactMarkdown
                plugins={[gfm]}
                children={job.how_to_apply}
                allowDangerousHtml
              />
            </div>
          </div>
        </div>

        <div className={styles.container_right}>
          <div className={styles.job_container}>
            <div className={styles.title_heading}>{job.title}</div>
            <button className={styles.job_type}>Full time</button>
            <div className={styles.info_container}>
              <AccessTimeIcon
                className={classes.date_posted}
                color="disabled"
              />
              <div className={styles.location}>
                {timeAgo.format(Date.parse(job.created_at))}
              </div>
            </div>
          </div>

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
              <div className={styles.info_container}>
                <PublicRoundedIcon
                  className={classes.location}
                  color="disabled"
                />
                <div className={styles.job_location}>{job.location}</div>
              </div>
            </div>
          </div>

          <div className={styles.job_description}>
            <p className={styles.job_company_info}>
              <ReactMarkdown plugins={[gfm]} children={job.description} />
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Job;

export async function getServerSideProps({ params }) {
  const job = await getJob(params.id);

  return {
    props: {
      job,
    },
  };
}
```

## Roadmap

### Milestone 1

- [x] Add ESLint
- [x] I can see a list of jobs in a city by default
- [x] I can search for jobs with a given keyword
- [x] I can search for jobs with a city name, zip code or other location
- [x] I can select one option from at least 4 pre-defined options
- [x] I can search for a full-time job only

### Milestone 2

- [x] I can see a list of jobs with their logo, company name, location, and posted time.
- [x] When I select a job, I can see job descriptions and how to apply like the given design.
- [x] When I am on the job details page, I can go back to the search page

### Milestone 3

- [x] I can see a list of jobs in the closest city from my location by default
- [ ] I can see jobs in different pages, 5 items each page

### Milestone 4

- [ ] Add Dark theme

## How To Use

<!-- Example: -->

```bash
# Clone this repository
$ git clone https://github.com/your-user-name/your-project-name

# Install dependencies
$ npm install # or yarn install

# Run the app
$ npm run dev # or yarn dev
```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

- [Google](https://www.google.com/)

## Contact

- [Twitter](https://{twitter.com/saschamars})
