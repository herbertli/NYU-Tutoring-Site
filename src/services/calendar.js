import config from './../googleConfig';

export const loadCalendarEvents = (startDate, daysInAdvance) => {
  window.gapi.client.load("calendar", "v3", () => {
    window.gapi.client.calendar.events.list({
      "calendarId": config.calendarId,
      "timeMax": startDate.setDate(startDate.getDate() + daysInAdvance),
      "timeMin": startDate
    }).then((response) => {
      console.log("Response", response.result);
    }).catch((err) => {
      console.error("Execute error", err); 
    });
  });
}
