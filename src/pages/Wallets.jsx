import React, { useState } from 'react';
import { wallets } from '../Data/wallets';
import WalletModal from '../components/WalletsModal';
import ConnectModal from '../components/ConnectModal';


const Wallets = () => {
	const [open, setOpen] = useState(false);
	const [openConnect, setOpenConnect] = useState(false);
	const [selectedWallet, setSelectedWallet] = useState('');
	return (
		<div className='wallets'>
			<WalletModal
				open={open}
				setOpen={setOpen}
				setOpenConnect={setOpenConnect}
			/>
			<ConnectModal open={openConnect} setOpen={setOpenConnect} selectedWallet={selectedWallet} />
			<div className='wallets-top'>
				<h1>DebugDappNode</h1>
				<p>Decentralized Platform Wallet</p>
			</div>
			<div className='wallets-list-container'>
				{wallets.map((singleWallet, index) => {
					return (
						<div onClick={()=> setSelectedWallet(singleWallet.name)} key={index} className='single-wallet'>
							<img
								onClick={() => setOpen(true)}
								src={singleWallet.logo}
								alt=''
							/>
							<p onClick={() => setOpen(true)}>
								{singleWallet.name}
							</p>
						</div>
					);
				})}
			</div>
			<div className='wallets-down'>
				<p>
					Open an app submission issue on <span>GitHub</span> to add
					your app here.
				</p>
			</div>
		</div>
	);
};

export default Wallets;
