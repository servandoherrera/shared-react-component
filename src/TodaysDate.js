import React from 'react';

class TodaysDate extends React.Component {
   render() {
      return (
	<div>{`Todays date is ${Date()}`}</div>
      );
   }
}
export default TodaysDate;
