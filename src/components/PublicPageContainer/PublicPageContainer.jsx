import { PropTypes } from 'prop-types';
import {
  Container,
  FormHint,
  FormTitle,
  FormWindow,
} from './PublicPageContainerStyled';

export const PublicPageContainer = ({ title, children }) => (
  <Container>
    <FormWindow>
      <FormTitle>{title}</FormTitle>
      <FormHint>Enter your credentials</FormHint>
      {children}
    </FormWindow>
  </Container>
);

PublicPageContainer.propTypes = {
  title: PropTypes.string.isRequired,
};
