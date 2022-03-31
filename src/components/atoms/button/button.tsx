import React, { MouseEvent } from "react";
import { StyledButton, ButtonVariantsProps } from "./button.styles";

interface Props {
	children: React.ReactNode;
	loading?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

type ButtonProps = Props & ButtonVariantsProps;

const Button: React.FC<ButtonProps> = ({ children, disabled, loading, type, onClick, ...props }) => {
	const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
		if (disabled) return;
		onClick && onClick(event);
	};
	return (
		<StyledButton disabled={disabled} loading={loading} onClick={clickHandler} type={type} {...props}>
			{children}
		</StyledButton>
	);
};

export default Button;
