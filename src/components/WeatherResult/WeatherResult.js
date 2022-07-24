import PropTypes from 'prop-types';

import { Card, Image } from 'semantic-ui-react';

function WeatherResult({ weatherResult, locationInfo }) {
  return (
    <Card centered>
      <Image src={weatherResult.weather_icons} wrapped ui={true} />
      <Card.Content>
        <Card.Header>{locationInfo.name} - {locationInfo.country}</Card.Header>
        <Card.Meta>
          <span className="date">{locationInfo.localtime}</span>
        </Card.Meta>
        <Card.Description>
          Température actuelle : {weatherResult.temperature}°
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

WeatherResult.propTypes = {
  weatherResult: PropTypes.object.isRequired,
  locationInfo: PropTypes.object.isRequired,
};

export default WeatherResult;
