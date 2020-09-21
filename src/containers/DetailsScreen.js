import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { Toolbar, withTheme } from 'react-native-material-ui';
import FitImage from 'react-native-fit-image';
import Constants from 'expo-constants';

import * as detailActions from '../actions/details';
import * as listActions from '../actions/library';
import MainView from '../components/MainView';

const styles = StyleSheet.create({
  movieTitle: {
    fontSize: 15,
    fontWeight: 'bold'
  },

  movieYear: {
    fontSize: 12,
    fontWeight: 'bold'
  },

  result: {
    backgroundColor: '#1f2923'
  },
});

class DetailsScreen extends React.Component {
  static propTypes = {
    movie: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    result: PropTypes.object,
    listItemAdded: PropTypes.bool.isRequired,
    listFavoriteAdded: PropTypes.bool.isRequired,

    detailActions: PropTypes.object.isRequired,
    listActions: PropTypes.object.isRequired,
  };

  static defaultProps = {
    loading: true,
    result: null,
  };

  componentWillMount() {
    if (!this.props.result) {
      const movieId = this.props.movie.imdbID;
      this.props.detailActions.fetchDetails(movieId);
    }
  }

  handleListIconPress = () => {
    if (this.props.listItemAdded) {
      this.props.listActions.listRemove(this.props.movie);
    } else {
      this.props.listActions.listAdd(this.props.movie);
    }
  }

  handleFavPress = () => {
    if (this.props.listFavoriteAdded) {
      this.props.listActions.favoritesRemove(this.props.movie);
    } else {
      this.props.listActions.favoritesAdd(this.props.movie);
    }
  }

  handleRightElementPress = () => {
    this.handleFavPress();
  }

  render() {
    const {
      movie, loading, result,
      listItemAdded, listFavoriteAdded
    } = this.props;
    return (
      <MainView>
        <Toolbar
          centerElement={Constants.manifest.name}
          rightElement={[
            listFavoriteAdded ? 'md-star' : 'md-star-outline',
          ]}
          onRightElementPress={this.handleRightElementPress}
        />
        <ScrollView>
          <FitImage
            style={styles.moviePoster}
            source={{ uri: movie.Poster }}
          />
          {loading ?
            <View>
              <Text>Loading</Text>
            </View>
            :
            <View style={styles.result}>
              <Card>
                <Text style={styles.movieTitle}>{result.Title}</Text>
                <Text style={styles.movieYear}>Ano: {result.Year}</Text>                
                {/* <Text>{JSON.stringify(result)}</Text> */}
              </Card>
            </View>
          }
        </ScrollView>
      </MainView>
    );
  }
}

const stateToProps = ({ details, library }, ownProps) => {
  const movie = ownProps.navigation.getParam('movie');
  const movieId = movie.imdbID;
  const movieDetails = details.resultsById[movieId] || {};

  return {
    movie,
    loading: movieDetails.loading,
    result: movieDetails.result,
    listItemAdded: !!library.sections.list.find(m => m.imdbID === movieId),
    listFavoriteAdded: !!library.sections.favorites.find(m => m.imdbID === movieId),
  };
};

const dispatchToProps = dispatch => ({
  detailActions: bindActionCreators(detailActions, dispatch),
  listActions: bindActionCreators(listActions, dispatch),
});

export default connect(stateToProps, dispatchToProps)(
  withTheme(DetailsScreen)
);
