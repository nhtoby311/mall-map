import * as React from 'react';
const ExitSVG = ({ width, className, color, onClickCB }: any) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={width || 158}
		className={className}
		fill='none'
		viewBox='0 0 158 98'
		onClick={onClickCB}>
		<circle cx={78.057} cy={55.5} r={42.5} fill='#FFFEFA' />
		<path
			className='cross-svg'
			stroke='#000'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={3}
			d='m67.625 54.875 21.25-21.25m-21.25 0 21.25 21.25'
		/>
		<path
			fill='#fff'
			fillRule='evenodd'
			d='M0 65.175C17.212 62.217 31.652 51.545 39.331 37H45V18.382l.017-.16v47.403H0v-.45ZM45.017 7.778 45 7.618V.625h.017v7.153ZM157.016 67.55c-17.212-2.958-31.652-13.63-39.331-28.175h-5.669V20.757l-.016-.16V68h45.016v-.45ZM112 10.153l.016-.16V3H112v7.153Z'
			clipRule='evenodd'
		/>
	</svg>
);
export default ExitSVG;
