import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import mainImage from './assets/photo.jpg';
import {FaLinkedin, FaWhatsappSquare} from 'react-icons/fa'

const MainCmp=()=>{
    return(
        <div id="main">
            <img className="w-full h-screen object-cover" src={mainImage} alt=''/>
            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
                <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Jonathan Chan</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a 
                    <TypeAnimation
                        sequence={[
                            'University Student', 
                            1000, 
                            'programmer', 
                            1000,
                            () => {
                            console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                            }
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1em', paddingLeft:'5px' }}
                        />
                    </h2>
                    <div className=" flex justify-between pt-8 max-w-[200px] w-[50%] ">
                    <a href="https://www.linkedin.com/in/chan-jonathan-63037223a"><FaLinkedin className='cursor-pointer' size={40}/></a>
                    <a href="https://wa.me/85254033854"><FaWhatsappSquare  className='cursor-pointer' size={40}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainCmp