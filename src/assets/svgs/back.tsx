import * as React from "react";

export const Back = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 1024 1024"
		fill="currentColor"
		{...props}
	>
		<path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64"></path>
		<path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z"></path>
	</svg>
);
