import { Header, Icon } from 'semantic-ui-react';
import './appTitle.scss';

function AppTitle() {
  return (
    <Header as="h2" icon size="huge">
      <Icon.Group size="small">
        <Icon name="sun" color="yellow" />
      </Icon.Group>
      {/* <Icon.Group size="small">
        <Icon name="cloud" color="grey" />
      </Icon.Group> */}
      <Icon.Group size="small">
        <Icon name="rain" />
      </Icon.Group>
      <Header.Content>Votre appli Météo</Header.Content>
      <Header.Subheader>
        Saisissez une ville dans la barre de recherche
      </Header.Subheader>
    </Header>
  );
}

export default AppTitle;
