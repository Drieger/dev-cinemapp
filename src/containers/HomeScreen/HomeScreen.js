import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Toolbar } from 'react-native-material-ui';
import Constants from 'expo-constants';
import { StyleSheet, Text } from 'react-native';

import MainView from '../../components/MainView';
import Tabs from '../../components/Tabs';
import ListContent from './ListContent';
import FavoritesContent from './FavoritesContent';
import * as listActions from '../../actions/library';

const routes = [
  { key: 'list', title: 'Buscar', component: ListContent },
  { key: 'favorites', title: 'Favoritos', component: FavoritesContent },
];

const styles = StyleSheet.create({
  titleText: {
    marginLeft: 0,
    color: 'white',
  },

  container: {
    fontWeight: 'bold'
  },

  subHeader: {
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 15,
    paddingRight: 5
  }
});

class HomeScreen extends React.Component {
  static propTypes = {
    tabIndex: PropTypes.number.isRequired,
    listActions: PropTypes.object.isRequired,
  };

  handleRightIconPress = () => {
    this.props.navigation.navigate('Search');
  }

  handleTabIndexChange = (index) => {
    const route = routes[index];
    this.props.listActions.navChange(route.key);
  }

  render() {
    const { tabIndex } = this.props;
    return (
      <MainView>
        <Toolbar
          style={styles.container}
          centerElement={routes[tabIndex].key === 'list' ? Constants.manifest.name : `${Constants.manifest.name + ' - Favoritos'}`}
          rightElement={'md-search'}
          onRightElementPress={this.handleRightIconPress}
        />
        <Text style={styles.subHeader}>
          Bem-vindo ao mundo espetacular do cinema.
        </Text>
        <Tabs
          routes={routes}
          index={tabIndex}
          onIndexChange={this.handleTabIndexChange}
        />
      </MainView>
    );
  }
}

const stateToProps = ({ library }) => ({
  tabIndex: routes.findIndex(r => r.key === library.nav),
});

const dispatchToProps = dispatch => ({
  listActions: bindActionCreators(listActions, dispatch),
});

export default connect(stateToProps, dispatchToProps)(HomeScreen);
