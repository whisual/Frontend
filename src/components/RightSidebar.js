import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar'

const RightSidebar = () => {
    return (
        <div className='w-[20%] mt-2'>
            <div className='p-2 bg-gray-100 rounded-xl outline-none flex items-center'>
                <CiSearch />
                <input type="text" className='bg-transparent outline-none ml-2' placeholder='Search' />
            </div>
            <div className='p-4 bg-gray-100 rounded-xl mt-1'>
                <h1 className='font-bold'>Who to follow</h1>
                <div className='flex items-center mt-3'>
                    <Avatar src="https://avatars.githubusercontent.com/u/102051680?s=400&u=2b436634eb2c3a96c5d1d80f28001895558f22c5&v=4" size="30" round={true} />
                    <div className='ml-2 text-left'>
                        <h1 className='font-semibold'>Ashu</h1>
                        <p className='text-gray-500 text-xs'>@ashutosh</p>
                    </div>
                    <button className='text-white text-sm bg-black rounded-full w-14 h-8 ml-12'>follow</button>
                </div>
                <div className='flex items-center mt-3'>
                    <Avatar src="https://avatars.githubusercontent.com/u/102051680?s=400&u=2b436634eb2c3a96c5d1d80f28001895558f22c5&v=4" size="30" round={true} />
                    <div className='ml-2 text-left'>
                        <h1 className='font-semibold'>Rishabh</h1>
                        <p className='text-gray-500 text-xs mr-2'>@rishabh</p>
                    </div>
                    <button className='text-white text-sm bg-black rounded-full w-14 h-8 ml-12'>follow</button>
                </div>
                <div className='flex items-center mt-3'>
                    <Avatar src="https://avatars.githubusercontent.com/u/102051680?s=400&u=2b436634eb2c3a96c5d1d80f28001895558f22c5&v=4" size="30" round={true} />
                    <div className='ml-2 text-left'>
                        <h1 className='font-semibold'>Rachit</h1>
                        <p className='text-gray-500 text-xs'>@rachit</p>
                    </div>
                    <button className='text-white text-sm bg-black rounded-full w-14 h-8 ml-16'>follow</button>
                </div>
                <div className='flex items-center mt-3'>
                    <Avatar src="https://avatars.githubusercontent.com/u/102051680?s=400&u=2b436634eb2c3a96c5d1d80f28001895558f22c5&v=4" size="30" round={true} />
                    <div className='ml-2 text-left'>
                        <h1 className='font-semibold'>Paras</h1>
                        <p className='text-gray-500 text-xs mr-2'>@paras</p>
                    </div>
                    <button className='text-white text-sm bg-black rounded-full w-14 h-8 ml-16'>follow</button>
                </div>
                <div className='flex items-center mt-3'>
                    <Avatar src="https://avatars.githubusercontent.com/u/102051680?s=400&u=2b436634eb2c3a96c5d1d80f28001895558f22c5&v=4" size="30" round={true} />
                    <div className='ml-2 text-left'>
                        <h1 className='font-semibold'>Ayush</h1>
                        <p className='text-gray-500 text-xs'>@ayush</p>
                    </div>
                    <button className='text-white text-sm bg-black rounded-full w-14 h-8 ml-16'>follow</button>
                </div>
                <div className='flex items-center mt-3'>
                    <Avatar src="https://avatars.githubusercontent.com/u/102051680?s=400&u=2b436634eb2c3a96c5d1d80f28001895558f22c5&v=4" size="30" round={true} />
                    <div className='ml-2 text-left'>
                        <h1 className='font-semibold'>Aditya</h1>
                        <p className='text-gray-500 text-xs'>@adi</p>
                    </div>
                    <button className='text-white text-sm bg-black rounded-full w-14 h-8 ml-16'>follow</button>
                </div>
                <div className='flex items-center mt-3'>
                    <Avatar src="https://avatars.githubusercontent.com/u/102051680?s=400&u=2b436634eb2c3a96c5d1d80f28001895558f22c5&v=4" size="30" round={true} />
                    <div className='ml-2 text-left'>
                        <h1 className='font-semibold'>Deep Raj</h1>
                        <p className='text-gray-500 text-xs'>@deep</p>
                    </div>
                    <button className='text-white text-sm bg-black rounded-full w-14 h-8 ml-12'>follow</button>
                </div>
                <div className='flex items-center mt-3'>
                    <Avatar src="https://avatars.githubusercontent.com/u/102051680?s=400&u=2b436634eb2c3a96c5d1d80f28001895558f22c5&v=4" size="30" round={true} />
                    <div className='ml-2 text-left'>
                        <h1 className='font-semibold'>Shubham</h1>
                        <p className='text-gray-500 text-xs'>@shubham</p>
                    </div>
                    <button className='text-white text-sm bg-black rounded-full w-14 h-8 ml-12'>follow</button>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar
