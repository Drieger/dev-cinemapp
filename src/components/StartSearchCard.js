import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Icon } from 'react-native-material-ui';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 8,
    backgroundColor: 'white',
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconContainer: {
    marginRight: 20,
  },

  text: {
    fontSize: 20,
    color: 'darkgrey'
  },
});


const TextView = ({ children }) => (
  <View>
    <Text style={styles.text}>{children}</Text>
  </View>
);
TextView.propTypes = {
  children: PropTypes.string.isRequired,
};

class StartSearchCard extends React.Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
  };

  render() {
    const { onPress } = this.props;
    return (
      <Card
        style={{ container: styles.container }}
        onPress={onPress}
      >
        <View style={styles.content}>
          <View>
            <TextView>O que você busca ...</TextView>
          </View>
        </View>
      </Card>
    );
  }
}

export default StartSearchCard;
