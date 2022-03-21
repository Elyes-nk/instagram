import { Dimensions } from 'react-native';
import styled from 'styled-components';

export const Img = styled.Image`
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').width};
`