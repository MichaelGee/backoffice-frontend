import React, { MouseEvent } from "react";
import withDefaults from "utils/with-defaults";
import { StyledButton, ButtonVariantsProps } from "./button.styles";

interface Props {
	children: React.ReactNode;
	loading?: boolean;
	variant?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

type ButtonProps = Props & ButtonVariantsProps;

const defaultProps = {
	variant: "primary",
};

const Button: React.FC<ButtonProps> = ({ children, disabled, loading, type, onClick, variant, ...props }) => {
	const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
		if (disabled) return;
		onClick && onClick(event);
	};
	return (
		<StyledButton
			disabled={disabled}
			variant={variant}
			loading={loading}
			onClick={clickHandler}
			type={type}
			{...props}>
			{children}
		</StyledButton>
	);
};

export default withDefaults(Button, defaultProps);
