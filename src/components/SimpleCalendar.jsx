import React from 'react';
import config from './../googleConfig';
import { loadEvents } from './../services/calendar';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

class SimpleCalendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }


  componentDidMount() {
    window.gapi.load("client", this.getEvents);
  }

  getEvents = () => {
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        loadEvents();
      });
  };

  render() {
    return <div>
      <BigCalendar
        events={this.state.events}
        startAccessor='startDate'
        endAccessor='endDate'
      />
    </div>;
  }

}

export default SimpleCalendar;