import React from "react";
import './styles.css';
import {Card} from 'semantic-ui-react';

function Weather ({weatherData}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
        {weatherData.name}
        </Card.Header>
      </Card.Content>
    </Card>)
}
export default Weather;