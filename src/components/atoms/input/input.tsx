import React, { useState, forwardRef } from "react";
import { Icon } from "components/atoms/icon";
import { StyledInputMainContainer, StyledInputLabel, StyledInput, StyledInnerContainer } from "./input.styles";

interface Props {
	type?: string;
	placeholder?: string;
	label?: string;
	value?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(function Input({ type, placeholder, label, value, ...props }, ref) {
	const [show, setShow] = useState(false);
	const toggleShow = () => setShow((v) => !v);
	return (
		<StyledInputMainContainer>
			<StyledInputLabel>{label}</StyledInputLabel>
			<StyledInnerContainer>
				<StyledInput
					aria-label="input"
					data-testid="input"
					type={show ? "password" : "text" || type}
					value={value}
					placeholder={placeholder}
					ref={ref}
					{...props}
				/>
				{type === "password" && (
					<Icon
						onClick={toggleShow}
						icon={!show ? "hide" : "show"}
						size={20}
						fill="#7E5FF2"
						viewBox={show ? "0 0 20 16" : "0 0 20 18"}
						className="show-icon"
					/>
				)}
			</StyledInnerContainer>
		</StyledInputMainContainer>
	);
});

export default Input;
