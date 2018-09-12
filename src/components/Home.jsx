import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from '@material-ui/core/ButtonBase';
import links from './../linkConfig';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router'

const styles = {
  card: {
    minWidth: 300,
    maxWidth: 300,
    minHeight: 150,
    maxHeight: 150
  }
};

const Home = (props) => {
  const { classes, history } = props;

  return <div style={{ padding: 40 }}>
    <Grid container direction="column" alignItems="center" justify="center" spacing={8}>
      <Grid item>
        <Typography variant="display2" gutterBottom>
          Welcome to Intro to Programming Tutoring!
          </Typography>
      </Grid>
      <Grid item>
        <Typography variant="headline">
          This site will serve as your one-stop guide to all things tutoring!
          </Typography>
      </Grid>
      <Grid item>
      <Typography variant="subheading" gutterBottom>
          Click on any of the boxes below or any of the icons in the top bar.
        </Typography>
      </Grid>
    </Grid>
    <Grid container direction="row" alignItems="baseline" spacing={16} justify="center">
      <Grid item>
        <ButtonBase focusRipple key={1} onClick={() => window.open(links.syllabusLink, "_blank")}>
          <Card className={classes.card} elevation={3}>
            <CardContent>
              <Typography variant="headline" component="h2">
                Common Course Syllabus
                  </Typography>
              <Typography component="p">
                In-class assignments, drop-in calendar, syllabus, etc.
                  </Typography>
            </CardContent>
          </Card>
        </ButtonBase>
      </Grid>
      <Grid item>
        <ButtonBase focusRipple key={1} onClick={() => window.open(links.slackLink, "_blank")}>

          <Card className={classes.card} elevation={3}>
            <CardContent>
              <Typography variant="headline" component="h2">
                Slack
                </Typography>
              <Typography component="p">
                Check-in and talk to other tutors here
                </Typography>
            </CardContent>
          </Card>
        </ButtonBase>
      </Grid>
      <Grid item>
        <ButtonBase focusRipple key={1} onClick={() => window.open(links.logLink, "_blank")}>
          <Card className={classes.card} elevation={3}>
            <CardContent>
              <Typography variant="headline" component="h2">
                Tutoring Log
                  </Typography>
              <Typography component="p">
                Log interactions during drop-in sessions here
                  </Typography>
            </CardContent>
          </Card>
        </ButtonBase>
      </Grid>
      <Grid item>
        <ButtonBase focusRipple key={1} onClick={() => { history.push("/faqs"); }}>
          <Card className={classes.card} elevation={3}>
            <CardContent>
              <Typography variant="headline" component="h2">
                FAQs
              </Typography>
              <Typography component="p">
                Log interactions during drop-in sessions here
                  </Typography>
            </CardContent>
          </Card>
        </ButtonBase>
      </Grid>
    </Grid>
  </div>
}

export default withRouter(withStyles(styles)(Home));