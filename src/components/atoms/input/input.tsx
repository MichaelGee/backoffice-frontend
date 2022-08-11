import React, { useState, forwardRef } from "react";
import { Icon } from "components/atoms/icon";
import {
  StyledInputMainContainer,
  StyledInputLabel,
  StyledInput,
  StyledInnerContainer,
  InputVariantsProps,
} from "./input.styles";

export type FormElement = HTMLInputElement;
interface Props {
  type?: string;
  placeholder?: string;
  label?: string;
  value?: string;
  onFocus?: (e: React.FocusEvent<FormElement>) => void;
  onChange?: (e: React.ChangeEvent<FormElement>) => void;
  onBlur?: (e: React.FocusEvent<FormElement>) => void;
}

type InputProps = Props & InputVariantsProps;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { type, placeholder, label, value, focused, onFocus, onChange, onBlur, ...props },
  ref
) {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((v) => !v);
  const [hover, setHover] = useState<boolean>(false);

  const focusHandler = (e: React.FocusEvent<FormElement>) => {
    setHover(true);
    onFocus && onFocus(e);
  };
  const blurHandler = (e: React.FocusEvent<FormElement>) => {
    setHover(false);
    onBlur && onBlur(e);
  };

  return (
    <StyledInputMainContainer>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledInnerContainer>
        <StyledInput
          aria-label='input'
          data-testid='input'
          type={show ? "password" : "text" || type}
          value={value}
          placeholder={placeholder}
          onFocus={focusHandler}
          // focused={hover}
          onChange={onChange}
          onBlur={blurHandler}
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <Icon
            onClick={toggleShow}
            icon={!show ? "hide" : "show"}
            size={20}
            fill='#7E5FF2'
            viewBox={show ? "0 0 20 16" : "0 0 20 18"}
            className='show-icon'
          />
        )}
      </StyledInnerContainer>
    </StyledInputMainContainer>
  );
});

export default Input;
