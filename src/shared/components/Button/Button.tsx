import { css, styled } from '~/../stitches.config';

type Props = {
  status?: 'loading' | 'error' | 'disabled';
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick?: () => void;
};
export const Button = ({ status, type = 'button', children, onClick = () => undefined }: Props) => (
  <SButton type={type} status={status} disabled={status === 'disabled'} onClick={() => onClick()}>
    {children}
  </SButton>
);

const disabledStyles = css({
  '&:disabled': {
    pointerEvents: 'none',
  },
});

const SButton = styled('button', disabledStyles, {
  backgroundColor: '$primary',
  fontSize: '$default',
  padding: '$xsm $md',

  '&:hover': {
    backgroundColor: '$gray400',
  },

  variants: {
    status: {
      loading: {
        backgroundColor: 'red',
      },
      error: {
        backgroundColor: '$error1',
      },
      disabled: {},
    },
  },
});
