import { Settings } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleServiceCard = ({ data }) => {
	return (
		<div className='singleServiceCard'>
			<div className='icon'>
				<Settings style={{ fontSize: '50px' }} />
			</div>
			<h3>{data.title}</h3>
			<p>{data.description}</p>
			<button className='small'>
				<Link className='Link' to={'/wallets'}>
					Select
				</Link>
			</button>
		</div>
	);
};

export default SingleServiceCard;
