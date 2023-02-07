import { Wrapper, Input, Icon, Btn } from './SearchBox.styled';
import PropTypes from 'prop-types';

export const SearchBox = ({ value, onChange, onSubmit }) => {
  return (
    <Wrapper onSubmit={onSubmit}>
      <Input type="text" value={value} onChange={onChange} />
      <Btn type="submit">
        <Icon />
      </Btn>
    </Wrapper>
  );
};

SearchBox.protoType = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}.isRequired;
