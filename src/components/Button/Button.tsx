import React from 'react';
import styled from 'styled-components';

import { COLORS } from './constants';

type ButtonProps = {
  variant: 'fill' | 'outline' | 'ghost';
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
};

type StyledButtonProps = { style: React.CSSProperties };

const SIZES = {
  small: {
    '--borderRadius': `${2}px`,
    '--fontSize': `${16 / 16}rem`,
    '--padding': `4px 12px`,
  } as React.CSSProperties,
  medium: {
    '--borderRadius': `${2}px`,
    '--fontSize': `${18 / 16}rem`,
    '--padding': `12px 20px`,
  } as React.CSSProperties,
  large: {
    '--borderRadius': `${4}px`,
    '--fontSize': `${21 / 16}rem`,
    '--padding': `16px 32px`,
  } as React.CSSProperties,
};

const BaseButton = styled.button<StyledButtonProps>`
  font-family: 'Roboto', sans-serif;
  border: 2px solid transparent;
  border-radius: var (--borderRadius);
  cursor: pointer;
  font-size: var(--fontSize);
  font-weight: 500;
  padding: var(--padding);
  text-align: center;
  text-decoration: none;

  &:focus {
    outline-color: ${COLORS.primary};
    outline-offset: 4px;
  }
`;

const FillButton = styled(BaseButton)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`;

const OutlineButton = styled(BaseButton)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid currentColor;

  &:hover {
    background-color: ${COLORS.offwhite};
  }
`;

const GhostButton = styled(BaseButton)`
  background-color: transparent;
  border: none;
  color: ${COLORS.gray};

  &:focus {
    outline-color: ${COLORS.gray};
  }

  &:hover {
    background-color: ${COLORS.transparentGray15};
    color: ${COLORS.black};
  }
`;

const Button = ({ variant, size, children }: ButtonProps): JSX.Element => {
  const styles = SIZES[size];
  switch (variant) {
    case 'fill':
      return <FillButton style={styles}>{children}</FillButton>;
    case 'outline':
      return <OutlineButton style={styles}>{children}</OutlineButton>;
    case 'ghost':
      return <GhostButton style={styles}>{children}</GhostButton>;
    default:
      return <BaseButton style={styles}>{children}</BaseButton>;
  }
};

export default Button;
