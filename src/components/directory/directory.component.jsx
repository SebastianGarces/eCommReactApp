import React, { useState } from "react";

import { sectionsData } from "./directory.data";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = () => {
	const [sections, setSections] = useState(sectionsData);

	return (
		<div className="directory-menu">
			{sectionsData.map(({ title, imageUrl, id, size }) => {
				return (
					<MenuItem
						key={id}
						title={title}
						imageUrl={imageUrl}
						size={size}
					/>
				);
			})}
		</div>
	);
};

export default Directory;
