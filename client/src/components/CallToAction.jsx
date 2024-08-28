import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to interact with the author?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout Author's contact info
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://sid14-14.github.io/portfolio-2/" target='_blank' rel='noopener noreferrer'>
                {/* noopener noreferrer: to make sure our link(as pop-up) isn't blocked */}
                    Sid's portfolio web-site
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://sid14-14.github.io/portfolio-2/assets/profile-pic.png" />
        </div>
    </div>
  )
}