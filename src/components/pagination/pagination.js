import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      alignContent: "flex-end",
      justifyContent: "flex-end !important",
    },
    ul: {},
  },
}));

export default function PaginateJobs() {
  const classes = useStyles();

  return (
    <div className={[classes.root, classes.position]}>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </div>
  );
}
