import React from 'react';

const SvgTwitter = (props: Props): JSX.Element => {
	return (
		<svg width={24} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g clipPath="url(#twitter_svg__clip0)">
				<path
					d="M24 2.31c-.88.39-1.83.66-2.83.78 1.02-.61 1.8-1.57 2.17-2.72-.95.56-2.01.97-3.13 1.2C19.31.6 18.03 0 16.62 0c-3.18 0-5.51 2.97-4.8 6.05C7.73 5.84 4.1 3.88 1.67.9a4.94 4.94 0 001.52 6.58c-.8-.03-1.56-.25-2.23-.62-.05 2.28 1.58 4.41 3.95 4.89-.69.19-1.45.23-2.22.08a4.923 4.923 0 004.6 3.42A9.863 9.863 0 010 17.29c2.18 1.4 4.77 2.21 7.55 2.21 9.14 0 14.31-7.72 13.99-14.65.96-.69 1.8-1.55 2.46-2.54z"
					fill="#fff"
				/>
			</g>
			<defs>
				<clipPath id="twitter_svg__clip0">
					<path fill="#fff" d="M0 0h24v19.5H0z" />
				</clipPath>
			</defs>
		</svg>
	);
};

type Props = {} & React.SVGProps<SVGSVGElement>;
export default SvgTwitter;
