import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Icons = ({name}) => {
  switch (name) {
    case 'cross':
      return <Icon name="times" size={45} color="yellow" />;
    case 'circle':
      return <Icon name="circle-thin" size={45} color="orange" />;
    default:
      return <Icon name="pencil" size={45} color="#FFF" />;
  }
};

export default Icons;
