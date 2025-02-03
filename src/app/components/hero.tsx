import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

function Hero() {
    return (
        <div className='w-full h-[270px] bg-red-800 flex justify-center mt-8'>
            <div className='bg-black h-full w-[80%] flex justify-between'>
                {/* left side*/}
                <div className='ml-8 mt-16 text-red-600'>
                    <div className='flex justify-center items-center '>
                        <span> <FontAwesomeIcon icon={faSkull} className='w-[28px]' /></span>
                        <span className='ml-4'>your fix of horror at one click</span>
                    </div>

                    <div className='w-[500px]'>
                        <h1 className='text-3xl font-bold ml-5'>For the First Time "Thrill", 10% off to Get Your Scary "Chills"</h1>
                        <button className='font-bold underline underline-offset-8 ml-5 mt-5'>Don't Run, Take a Peek</button>
                    </div>
                </div>
                {/*right side*/}
                <div>
                    <Image src={"/images/pexels-ravengorehg-14019247.jpg"} width={344} height={200} alt='Spookflix'></Image>

                </div>


            </div>
        </div>
    )
}
export default Hero