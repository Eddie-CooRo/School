import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

// Declare props and their descriptions
type Props = {
  /**
   * title for this component
   * @required true
   */
  title: string;

  /**
   * subtitle!
   */
  subtitle?: string;

  /**
   * border color
   */
  borderColor?: 'red' | 'coral' | 'yellow';
};

class Card extends Component<Props> {
  // Declare the required here
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  // Declare the default props
  static defaultProps = {
    title: 'default'
  };

  render() {
    const { title, subtitle, borderColor } = this.props;

    return (
      <View
        style={{
          height: 250,
          width: 350,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          borderWidth: 3,
          borderColor: borderColor,
          backgroundColor: 'white',
          marginVertical: 15
        }}
      >
        <Text style={{ fontSize: 32, color: 'black', marginBottom: 20 }}>
          {title}
        </Text>

        <Text style={{ fontSize: 14, color: 'gray' }}>{subtitle}</Text>
      </View>
    );
  }
}

export { Card };
