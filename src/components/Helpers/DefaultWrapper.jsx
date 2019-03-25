import styled from 'styled-components';
import theme from '../../utils/themes/default';
const spacing = theme.spacing;

const DefaultWrapper = styled.div`
  margin: ${spacing} 0 ${spacing} 0;
  display: flex;
  background: #f9feff;
  padding: 1em;
  border: solid thin #aeaeae;
  border-radius: 4px;
  box-shadow: 0 0 30px #bbb;
  
  &:empty {
    display: none;
  }

`;

export default DefaultWrapper;
