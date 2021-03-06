import React from "react";
import { iconPaths } from "assets/allIcons/allIcons";
import withDefaults from "utils/with-defaults";

interface Props {
	size?: number;
	fill?: string;
	icon: string;
	className?: string;
	viewBox?: string;
	style?: React.CSSProperties;
	onClick?: React.MouseEventHandler<SVGSVGElement>;
}

const defaultProps = {
	size: 24,
	fill: "#7E5FF2",
	viewBox: "0 0 24 24",
	className: "",
	style: {},
};

const Icon: React.FC<Props> = ({ size, fill, icon, className, viewBox, style, ...props }) => {
	return (
		<svg
			className={className}
			style={style}
			viewBox={viewBox}
			width={`${size}px`}
			height={`${size}px`}
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path fill={fill} d={iconPaths[icon]} />
		</svg>
	);
};

export default withDefaults(Icon, defaultProps);
