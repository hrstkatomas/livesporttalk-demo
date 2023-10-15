import React, { useEffect, useState } from "react";

export function Refresher() {
	const [show, setShow] = useState(true);
	useEffect(() => setShow(false), []);
	if (!show) return null;

	return <a href={"/?refresh=1"}>REFRESH</a>;
}
