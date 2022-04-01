import React, { useState } from "react";
import { Icon } from "components/atoms/icon";
import { StyledInputMainContainer, StyledInputLabel, StyledInput, StyledInnerContainer } from "./input.styles";

interface Props {
	type?: string;
	placeholder?: string;
	label?: string;
}

const Input: React.FC<Props> = ({ type, placeholder, label, ...props }) => {
	const [show, setShow] = useState(false);
	const toggleShow = () => setShow((v) => !v);
	return (
		<StyledInputMainContainer>
			<StyledInputLabel>{label}</StyledInputLabel>
			<StyledInnerContainer>
				<StyledInput aria-label="input" data-testid="input" type={type} placeholder={placeholder} {...props} />
				{type === "password" && (
					<Icon
						onClick={toggleShow}
						icon={!show ? "hide" : "show"}
						size={20}
						fill="#7E5FF2"
						viewBox="0 0 20 16"
						className="show-icon"
					/>
				)}
			</StyledInnerContainer>
		</StyledInputMainContainer>
	);
};

export default Input;
