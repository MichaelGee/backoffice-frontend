import React, { useState, useEffect, forwardRef } from "react";
import { Icon } from "components/atoms/icon";
import {
  StyledInputMainContainer,
  StyledInputLabel,
  StyledInput,
  StyledInnerContainer,
  InputVariantsProps,
  PasswordEye,
  Addon,
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
  addon?: any;
}

type InputProps = Props & InputVariantsProps;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { type, placeholder, label, value, focused, addon, onFocus, onChange, onBlur, ...props },
  ref
) {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((v) => !v);
  const [hover, setHover] = useState<boolean>(false);
  const [addonPresent, setAddonPresent] = useState<boolean>(false);

  const focusHandler = (e: React.FocusEvent<FormElement>) => {
    setHover(true);
    onFocus && onFocus(e);
  };
  const blurHandler = (e: React.FocusEvent<FormElement>) => {
    setHover(false);
    onBlur && onBlur(e);
  };

  useEffect(() => {
    if (addon) {
      setAddonPresent(true);
    } else {
      setAddonPresent(false);
    }
  }, [addon]);

  const renderInputType = () => {
    switch (type) {
      case "password":
        return (
          <StyledInput
            aria-label='input'
            data-testid='input'
            type={show ? "text" : "password"}
            passwordState={show}
            value={value}
            checkAddon={addonPresent}
            placeholder={placeholder}
            onFocus={focusHandler}
            focused={hover}
            onChange={onChange}
            onBlur={blurHandler}
            ref={ref}
            {...props}
          />
        );
      default:
        return (
          <StyledInput
            aria-label='input'
            data-testid='input'
            type={type}
            passwordState={show}
            value={value}
            checkAddon={addonPresent}
            placeholder={placeholder}
            onFocus={focusHandler}
            focused={hover}
            onChange={onChange}
            onBlur={blurHandler}
            ref={ref}
            {...props}
          />
        );
    }
  };

  return (
    <StyledInputMainContainer>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledInnerContainer>
        {addon && <Addon>{addon}</Addon>}
        {renderInputType()}
        {type === "password" && (
          <PasswordEye
            onClick={toggleShow}
            icon={show ? "hide" : "show"}
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
