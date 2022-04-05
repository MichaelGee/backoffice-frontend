import React, { useState, useCallback, useMemo, useEffect } from "react";
import withDefaults from "utils/with-defaults";
import {
	StyledSwitchContainer,
	StyledSwitchInput,
	StyledSwitch,
	StyledSwitchCircle,
	SwitchContainerVariantsProps,
} from "./swtich.styled";

interface SwitchEventTarget {
	checked: boolean;
}

interface SwitchEvent {
	target: SwitchEventTarget;
	stopPropagation: () => void;
	preventDefault: () => void;
	nativeEvent: React.ChangeEvent;
}

interface Props {
	checked?: boolean;
	animated?: boolean;
	disabled?: boolean;
	icon?: React.ReactNode;
	iconOn?: React.ReactNode;
	iconOff?: React.ReactNode;
	initialChecked?: boolean;
	onChange?: (ev: SwitchEvent) => void;
	as?: keyof JSX.IntrinsicElements;
}

const defaultProps = {
	initialChecked: false,
};

export type SwitchProps = Props & typeof defaultProps & SwitchContainerVariantsProps;

const Switch: React.FC<SwitchProps> = ({
	initialChecked,
	checked,
	animated,
	icon,
	iconOn,
	iconOff,
	onChange,
	disabled,
	...props
}) => {
	const [selfChecked, setSelfChecked] = useState<boolean>(initialChecked);
	const changeHandle = useCallback(
		(ev: React.ChangeEvent) => {
			const selfEvent: SwitchEvent = {
				target: {
					checked: !selfChecked,
				},
				stopPropagation: ev.stopPropagation,
				preventDefault: ev.preventDefault,
				nativeEvent: ev,
			};

			setSelfChecked(!selfChecked);
			onChange && onChange(selfEvent);
		},
		[selfChecked, disabled, onChange]
	);

	const circleIcon = useMemo(() => {
		const hasIcon = icon || iconOn || iconOff;
		const hasIconOn = Boolean(iconOn);
		const hasIconOff = Boolean(iconOff);
		if (!hasIcon) return null;
		if (hasIconOn && selfChecked) return iconOn;
		if (hasIconOff && !selfChecked) return iconOff;
		return hasIcon;
	}, [selfChecked, icon, iconOn, iconOff]);

	useEffect(() => {
		if (checked === undefined) return;
		setSelfChecked(checked);
	}, [checked]);

	return (
		<StyledSwitchContainer animated={animated} {...props}>
			<StyledSwitchInput tabIndex={-1} type="checkbox" checked={selfChecked} onChange={changeHandle} />
			<StyledSwitch checked={selfChecked} animated={animated}>
				<StyledSwitchCircle>{circleIcon}</StyledSwitchCircle>
			</StyledSwitch>
		</StyledSwitchContainer>
	);
};

const MemoSwitch = React.memo(Switch);

export default withDefaults(MemoSwitch, defaultProps);
