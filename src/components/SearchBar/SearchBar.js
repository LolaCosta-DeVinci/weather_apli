import { Form, Icon, Input } from 'semantic-ui-react';
import './searchBar.scss';

import PropTypes from 'prop-types';

function SearchBar({ location, setLocation, getWeather }) {
  return (
    <Form onSubmit={getWeather}>
      <Input
        icon={<Icon name="search" inverted circular link />}
        placeholder="Marseille, Barcelone..."
        value={location}
        onChange={(e) => {
          setLocation(e.currentTarget.value);
        }}
      />
    </Form>
  );
}

SearchBar.propTypes = {
  location: PropTypes.string.isRequired,
  setLocation: PropTypes.func.isRequired,
  getWeather: PropTypes.func.isRequired,
};

export default SearchBar;
