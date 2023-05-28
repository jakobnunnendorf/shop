import {ComponentFrame} from './LoginComponent/ComponentFrame';
import './globals.css';

export default function Page() {
	return (
		<div className='flex flex-col items-center justify-around min-h-screen h-fit py-2 bg-gray-100'>
			<main className='flex flex-col items-center justify-center w-full flex-1 px-5 sm:px-20 text-center'>
				<h1 className='text-4xl font-bold text-gray-700 md:text-6xl my-20'>
          Hier entsteht eine Website
				</h1>
				<ComponentFrame />
			</main>
		</div>
	);
}
