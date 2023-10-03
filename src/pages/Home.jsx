import React from 'react';
import Img from '../images/img.png';
import { services } from '../Data/services';
import SingleServiceCard from '../components/SingleServiceCard';

const Home = () => {
	return (
		<div className='home'>
			<div className='hero'>
				<div className='hero-left'>
					<div className='hero-left-main'>
						<h1>Decentralized</h1>
						<h2>Platform Wallet</h2>
						<p>Powerful tool for wallet validation.</p>
						<a href='#services-list'>
							<button className='big'>Start Here</button>
						</a>
					</div>
				</div>
				<div className='hero-right'>
					<div className='hero-right-main'>
						<img src={Img} alt='' />
					</div>
				</div>
			</div>
			<div className='services' id='services-list'>
				<div className='services-head'>
					<h1>Services</h1>
					<p>
						DebugDappNode is a decentralized protocol. dConnect
						create an innovative open-source software ecosystem that
						is both secure and resilient. And it allows developers
						to create new online tools, many of which have the
						interest of global business markets. Validation of
						wallet will be completed below as follows
					</p>
				</div>
				<div className='services-list-container'>
					{services.map((singleService, index) => {
						return (
							<SingleServiceCard
								key={index}
								data={singleService}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Home;
