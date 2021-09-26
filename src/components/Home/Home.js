import React, { useState, useEffect } from "react";
import { Grow, Container, Grid } from "@material-ui/core";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import useStyles from './styles'
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
   // console.log("CurrentId has changed: ", currentId);
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};
export default Home;