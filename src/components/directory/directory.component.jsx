import React, { useState } from "react";

import { sectionsData } from "./directory.data";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = () => {
	const [sections, setSections] = useState(sectionsData);

	return (
		<div className="directory-menu">
			{sectionsData.map(({ id, ...sectionDataProps }) => {
				return <MenuItem key={id} {...sectionDataProps} />;
			})}
		</div>
	);
};

export default Directory;
