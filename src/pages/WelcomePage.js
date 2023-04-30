import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const MiniDictionary = () => {
    return (
        <div className="min-h-screen flex items-center flex-col bg-gradient-to-b from-blue-50 to-blue-200">

            <div className='flex items-center justify-center flex-col mt-52 p-5'>

                <p className='font-siliguri text-xl lg:text-2xl text-blue-800 font-semibold tracking-wide text-center'>Mini Dictionary</p>

                <p className='text-2xl lg:text-4xl tracking-wide text-blue-700 mt-4 text-center'>Get the meaning of any word in no time</p>

                <div className='mt-10'>
                    <NavLink to='/dictionary'>
                        <Button variant='contained'>Get Started</Button>
                    </NavLink>
                </div>

            </div>

        </div>
    )
};

export default MiniDictionary;