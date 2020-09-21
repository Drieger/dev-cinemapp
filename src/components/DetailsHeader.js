import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { withTheme } from 'react-native-material-ui';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#1f2923' 
  },

  line: {
    flexDirection: 'row',
  },

  item: {
    flexDirection: 'row',
    marginRight: 15,
  },

  icon: {
    marginRight: 5,
  },

  text: {
    color: 'white',
    fontSize: 16,
  },

  titleText: {
    fontSize: 24,
  }
});

class DetailsHeader extends React.Component {
  static propTypes = {
    result: PropTypes.object.isRequired,
  };

  render() {
    const { result } = this.props;
    return (
      <View style={styles.container}>
        <View style={[styles.item, styles.title]}>
          <Text style={[styles.text, styles.titleText]}>{result.Title}</Text>
        </View>
        <View style={styles.line}>
          <View style={[styles.item, styles.year]}>
            <Text style={[styles.text, styles.yearText]}>{result.Year}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default withTheme(DetailsHeader);
