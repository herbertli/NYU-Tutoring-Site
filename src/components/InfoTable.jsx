import React from 'react';
import { Card, CardContent } from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const InfoTable = (props) => {
  const { user } = props;
  return (
    <Card>
      <CardContent>
        <Typography variant="headline" component="h2">
          {user.firstName} {user.lastName}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoTable