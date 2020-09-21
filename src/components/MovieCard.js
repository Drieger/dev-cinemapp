import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, ViewPropTypes } from 'react-native';
import FitImage from 'react-native-fit-image';
import { View, Card, Subheader, ListItem, withTheme } from 'react-native-material-ui';
import { IconButton } from 'react-native-paper';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 10,
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
    borderRadius: 8,
    alignItems: 'center'
  },

  movieTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  movieFav: {
    flex:1,
    flexDirection:'row',
    textAlign: 'right',
    paddingRight: 25,
    fontSize: 15
  }
});

class MovieCard extends React.Component {
  static propTypes = {
    movie: PropTypes.object.isRequired,
    style: PropTypes.shape({
      container: ViewPropTypes.style,
    }),
    onPress: PropTypes.func,
    loading: PropTypes.bool,
    result: PropTypes.object,
  };

  static defaultProps = {
    style: {},

    onPress: () => {},
  };

  handlePress = () => {
    this.props.onPress(this.props.movie);
  }

  render() {
    const {
      movie, loading, result, theme,
      listFavoriteAdded,
      style: propsStyle = {},
      ...rest
    } = this.props;
    return (
      <Card
        {...rest}
        style={{ container: [styles.container, propsStyle.container] }}
        onPress={this.handlePress}
        icon={true}
      >
        <Icon
          name='info'
          color={'#037ff8'}
        />  
        <Subheader
          lines={1}
          text={`${movie.Title || movie.title} (${movie.Year})`}
          style={{
            text: styles.movieTitle,
          }}
        />
        {/* <Icon
          rightElement={[
            listFavoriteAdded ? 'md-star' : 'md-star-outline',
          ]}
        /> */}
      </Card>
    );
  }
}

export default MovieCard;