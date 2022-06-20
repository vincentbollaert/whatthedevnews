import { styled, config } from '~/../stitches.config';
import { Label } from '../Label/Label';
import { LabelProps } from '../Label/Label';

type InputProps = {
  shouldAutoFocus?: boolean;
  name: string;
  type?: 'text' | 'number';
  value?: string | number;
  placeholder: string;
  status?: 'loading' | 'error' | 'disabled';
  className?: string;
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
type Props = InputProps & LabelProps;

export const Input = ({
  shouldAutoFocus,
  name,
  type = 'text',
  value,
  placeholder,
  label,
  status,
  className,
  children,
  onChange = () => undefined,
}: Props) => {
  return (
    <div>
      {label && <Label htmlFor={name}>{label}</Label>}

      <InputStyled
        autoFocus={shouldAutoFocus}
        value={value}
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        // onFocus={() => setIsFocused(true)}
        // onBlur={() => setIsFocused(false)}
        autoComplete="off"
      >
        {children && children}
      </InputStyled>
    </div>
  );
};

const InputStyled = styled('input', {
  width: 200,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  height: 35,
  fontSize: 15,
  lineHeight: 1,
  color: '$default',
  backgroundColor: 'transparent',
  boxShadow: `0 0 0 1px ${config.theme.colors.primary}`,

  '&:focus': {
    boxShadow: `0 0 0 2px ${config.theme.colors.primary}`,
  },
});
