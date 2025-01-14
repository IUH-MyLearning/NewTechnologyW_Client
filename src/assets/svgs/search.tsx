import { SVGProps } from "react";

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			strokeWidth={2}
			stroke="currentColor"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4.0999 9.9999C4.0999 6.74142 6.74142 4.0999 9.9999 4.0999C13.2584 4.0999 15.8999 6.74142 15.8999 9.9999C15.8999 13.2584 13.2584 15.8999 9.9999 15.8999C6.74142 15.8999 4.0999 13.2584 4.0999 9.9999ZM9.9999 2.8999C6.07868 2.8999 2.8999 6.07868 2.8999 9.9999C2.8999 13.9211 6.07868 17.0999 9.9999 17.0999C11.6723 17.0999 13.2097 16.5216 14.423 15.5542C14.4267 15.558 14.4305 15.5618 14.4343 15.5656L19.4343 20.5656C19.7467 20.8781 20.2532 20.8781 20.5656 20.5656C20.8781 20.2532 20.8781 19.7467 20.5656 19.4343L15.5656 14.4343C15.5618 14.4305 15.558 14.4267 15.5542 14.423C16.5216 13.2097 17.0999 11.6723 17.0999 9.9999C17.0999 6.07868 13.9211 2.8999 9.9999 2.8999Z"
				fill="#575757"
			/>
		</svg>
	);
};
