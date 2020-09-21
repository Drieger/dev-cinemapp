import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, ScrollView,
} from 'react-native';

import MovieCard from './MovieCard';

const styles = StyleSheet.create({
  searchResults: {
    flex: 1,
    backgroundColor: '#1f2923',
  },

  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class SearchResults extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    results: PropTypes.array.isRequired,

    onRequest: PropTypes.func.isRequired,
  };

  render() {
    const { loading, results, onRequest, 
    } = this.props;
    return (
      <View style={styles.searchResults}>
        {loading ?
          <View style={styles.loading}>
            <Text style={{color: 'white'}}>Loading</Text>
          </View>
          :
          <ScrollView>
            {results.map(movie => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                onPress={onRequest}
              />
            ))}
          </ScrollView>
        }
      </View>
    );
  }
}

export default SearchResults;
