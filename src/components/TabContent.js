import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2923',
  },
});

class TabContent extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <View style={styles.container}>
        {children}
      </View>
    );
  }
}

export default TabContent;
