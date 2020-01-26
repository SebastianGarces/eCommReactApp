import React from "react";

import { DIRECTORY_DATA } from "./directory.data";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = () => {
	return (
		<div className="directory-menu">
			{DIRECTORY_DATA.map(({ id, ...directoryDataProps }) => {
				return <MenuItem key={id} {...directoryDataProps} />;
			})}
		</div>
	);
};

export default Directory;
