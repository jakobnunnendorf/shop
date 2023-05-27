import Image from 'next/image';
import React from 'react';
import { FiMenu, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

export default function DashboardLayout({
	children, // Will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<section className='flex min-h-screen w-full flex-col justify-between bg-white'>
			<header className='h-32 w-full flex-col items-center text-center justify-center bg-teal-50'>
				{/* Below is the mobile navigation section */}
				<section className='h-full w-full flex-col items-center justify-around content-center'>
					<div className='flex h-full w-full items-center justify-around px-5'>
						<Image src='/p2d_logo.png' alt='logo' width='100' height='50' />
						<svg width='0' height='0'>
							<linearGradient
								id='coastal-mist'
								x1='100%'
								y1='100%'
								x2='0%'
								y2='0%'
							>
								<stop stopColor='#0388A6' offset='0%' />
								<stop stopColor='#0BADBF' offset='100%' />
							</linearGradient>
						</svg>
						<nav className='flex w-2/3 justify-around'>
							<FiShoppingCart
								size={40}
								style={{stroke: 'url(#coastal-mist)'}}
							/>
							<FiUser size={40} style={{stroke: 'url(#coastal-mist)'}} />
							<FiMenu size={48} color='#0388A6' />
						</nav>
					</div>
					<div className='flex w-4/5 justify-end rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 pb-[4px] mx-auto'>
						<div className='flex w-full h-full bg-white justify-end rounded-xl px-3 py-1'>
							<FiSearch size={40} style={{stroke: 'url(#coastal-mist)'}} />
						</div>
					</div>
				</section>
			</header>

			{children}

			<footer>
				<section className='flex h-12 w-full justify-around bg-slate-100'></section>
			</footer>
		</section>
	);
}
