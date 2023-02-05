import { Wrapper, Input, Icon, Btn } from './SearchBox.styled';

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
