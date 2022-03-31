import React from "react";
import { globalCss, getCssText } from "stitches/stitches.config";

export const globalStyles = globalCss({
	html: {
		fontFamily: "$dm",
	},
	body: {
		margin: 0,
		padding: 0,
		fontFamily: "$dm",
	},
});

const flushCSS = () => <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />;

const GlobalCSS: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
	globalStyles();
	return <React.Fragment>{children}</React.Fragment>;
};

type MemoGlobalCSSComponent<P = {}> = React.NamedExoticComponent<P> & {
	flush: typeof flushCSS;
};

const MemoGlobalCSS = React.memo(GlobalCSS) as MemoGlobalCSSComponent<React.PropsWithChildren<{}>>;

MemoGlobalCSS.flush = flushCSS;

export default MemoGlobalCSS;
