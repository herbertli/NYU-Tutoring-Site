import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import questions from './../questions';

const Questions = () => {

  return <div style={{ padding: 20 }}>
    <Grid container direction="column" justify="space-evenly" alignItems="center" spacing={32}>
      {questions.map(q => {
        return <Grid item xs={11}>
          <Typography variant="headline" component="h3">
            {q.q}
          </Typography>
          <Typography component="p">
            {q.a}
          </Typography>
        </Grid>
      })}
    </Grid>

  </div>
}

export default Questions;