import { Menu } from '@mui/icons-material';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const TopBar = () => {
	const [media, setMedia] = useState(false);
	const { pathname } = useLocation();
	const pathArr = pathname.split('/');
	const exactPath = pathArr[pathArr.length - 1];

	const navFunc = (nav) => {
		if (exactPath === nav) {
			return 'active';
		} else return 'inactive';
	};

	return (
		<div className='topBar'>
			<div className='logo-container'>
				Debug<span>DappNode</span>
			</div>
			<div className='navbar'>
				<ul>
					<li className={navFunc('')}>
						<Link className='Link' to={'/'}>
							Home
						</Link>
					</li>
					<li className={navFunc('wallets')}>
						<Link className='Link' to={'/wallets'}>
							ConnectDconnect
						</Link>
					</li>
					<li className={navFunc('contact')}>
						<Link className='Link' to={'/'}>
							Contact
						</Link>
					</li>
					<li className={navFunc('faq')}>
						<Link className='Link' to={'/'}>
							FAQ
						</Link>
					</li>
				</ul>
			</div>
			<div
				onClick={() => setMedia(!media)}
				className='menu-icon-contaner'>
				<Menu />
			</div>
			<div
				className='sm-nav'
				style={{
					transform: media ? 'translateX(0)' : 'translateX(100%)',
				}}>
				<ul>
					<li onClick={() => setMedia(false)} className={navFunc('')}>
						<Link className='Link' to={'/'}>
							Home
						</Link>
					</li>
					<li onClick={() => setMedia(false)} className={navFunc('wallets')}>
						<Link className='Link' to={'/wallets'}>
							ConnectDconnect
						</Link>
					</li>
					<li onClick={() => setMedia(false)} className={navFunc('contact')}>
						<Link className='Link' to={'/'}>
							Contact
						</Link>
					</li>
					<li onClick={() => setMedia(false)} className={navFunc('faq')}>
						<Link className='Link' to={'/'}>
							FAQ
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default TopBar;
