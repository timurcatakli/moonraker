import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  align-items: center;
  background: ${(props) => (props.active ? 'var(--red)' : 'var(--yellow)')};
  color: ${(props) => (props.active ? 'var(--white)' : 'var(--black)')};
  border-radius: var(--radius);
  border: ${(props) => (props.active ? '1px dashed var(--black)' : 'none')};
  box-shadow: -4px 4px 0px 1px #efefef;
  cursor: pointer;
  display: flex;
  display: inline;
  font-size: 24px;
  font-weight: 100;
  height: 60px;
  justify-content: center;
  line-height: 20px;
  padding: 10px 20px;
  text-shadow: ${(props) => (props.active ? 'none' : '1px 3px 2px #efefef')};
  width: 100%;
  :focus {
    outline: 0;
  }
  :hover {
    background: var(--red);
    border: none;
    color: var(--white);
    text-shadow: none;
  }
`;

const Button = (props) => {
  const { children, onAction, active } = props;
  return (
    <ButtonStyle onClick={onAction} active={active}>
      <div>{children}</div>
    </ButtonStyle>
  );
};

export default Button;
