import { useState } from 'react';
import {
	BiPaperPlane,
	BsSearch,
	GrHomeRounded,
	IoAddCircleOutline,
} from 'react-icons/all';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { RxExit } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const Navbar = () => {
	const { user, logout } = useAuth();
	const [active, setActive] = useState('home');
	const Navigate = useNavigate();
	const navClass = !user && 'hidden';
	const activeClass =
		'group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 bg-gray-100';
	const inactiveClass =
		'group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600';

	const classSelected = (value) => {
		setActive(value);
	};

	const handleLogout = () => {
		setActive('home');
		logout();
		Navigate('/login');
	};
	return (
		<>
			<div className={`${navClass} min-h-screen bg-black-100 fixed z-10`}>
				<div
					className={`min-h-screen border-r overflow-hidden transition-all duration-300 ease-in-out  bg-black shadow-lg ${
						active == 'search' ? 'w-12' : 'w-60'
					}`}>
					<div className='flex h-screen flex-col justify-between pt-2 pb-6'>
						<div>
							<Link
								to='/'
								className='w-max p-1 flex m-auto gap-1 items-center'>
								<span className='text-white'>YupiChat</span>
							</Link>
							<ul className='mt-6 space-y-2 tracking-wide'>
								<li
									className='min-w-max'
									onClick={() => classSelected('home')}>
									<Link
										to='/'
										aria-label='inicio'
										className={active == 'home' ? activeClass : inactiveClass}>
										<GrHomeRounded className='group-hover:text-[#b14b4b]' />
										<span
											className={`text-white -mr-1 ${
												active == 'home' ? 'font-medium' : ''
											}`}>
											Inicio
										</span>
									</Link>
								</li>
								<li
									className='min-w-max'
									onClick={() => classSelected('search')}>
									<a
										href='#'
										className={
											active == 'search' ? activeClass : inactiveClass
										}>
										<BsSearch className='group-hover:text-[#b14b4b]' />
										<span
											className={`text-white -mr-1 ${
												active == 'search' ? 'font-medium' : ''}`}>
											Buscar
										</span>
									</a>
								</li>
								<li
									className='min-w-max'
									onClick={() => classSelected('send')}>
									<a
										href='#'
										className={active == 'send' ? activeClass : inactiveClass}>
										<BiPaperPlane
											className='group-hover:text-[#b14b4b]'
											size={18}
										/>
										<span
											className={`text-white -mr-1 ${
												active == 'send' ? 'font-medium' : ''
											}`}>
											Mensajes
										</span>
									</a>
								</li>
								<li
									className='min-w-max'
									onClick={() => classSelected('create')}>
									<a
										href='#'
										className={
											active == 'create' ? activeClass : inactiveClass
										}>
										<IoAddCircleOutline className='text-gray-600 group-hover:text-[#b14b4b] text-lg' />
										<span
											className={`text-white -mr-1 ${
												active == 'create' ? 'font-medium' : ''
											}`}>
											Crear
										</span>
									</a>
								</li>
								<li
									className='min-w-max'
									onClick={() => classSelected('profile')}>
									<Link
										to='/profile/1'
										href='#'
										className={
											active == 'profile' ? activeClass : inactiveClass
										}>
										<HiOutlineUserCircle
											className='group-hover:text-[#b14b4b]'
											size={18}
										/>
										<span
											className={`text-white -mr-1 ${
												active == 'profile' ? 'font-medium' : ''
											}`}>
											Perfil
										</span>
									</Link>
								</li>
							</ul>
						</div>
						<div className='w-max -mb-3 border rounded-lg'>
							<button
								onClick={handleLogout}
								className='group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600'>
								<RxExit
									className='group-hover:text-[#b14b4b]'
									size={18}
								/>
								<span className='group-hover:text-[#b14b4b] '>Cerrar sesion</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className={` overflow-auto pl-12 min-h-screen fixed transition-all duration-300 ease-in-out w-0 ${
					active != 'search' ? 'hidden' : 'w-[21rem]'
				}`}>
				<div className=' border-r bg-black'>
					<div className='p-4'>
						<h1 className='text-xl mb-4 text-white'>Buscar</h1>
						<input
							placeholder='buscar'
							type='text'
							className='text-sm h-10 w-64 border rounded-md p-3'
						/>
					</div>
					<div className='border-t p-4 min-h-screen bg-black w-full mt-2'>
						<span className='text-sm'>Sin busquedas</span>
					</div>
				</div>
			</div>
		</>
	);
};
