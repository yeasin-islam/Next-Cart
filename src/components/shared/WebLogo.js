// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';

// export default function WebLogo(){
//     return (
//         <Link href="/" className='flex items-center'>
//             <div className='flex items-end w-28 md:w-32 lg:w-36'>
//                 <Image className='mb-2' src="/assest/WebLogo.png" alt="" />
//             </div>
//         </Link>
//     );
// };

'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function WebLogo() {
    return (
        <Link href="/" className='flex items-center'>
            {/* The w-XX class here controls the final rendered size */}
            <div className='w-10 lg:w-12 flex flex-row items-center gap-2'>
                <Image
                    // These props define the image's original aspect ratio
                    width={144}
                    height={20}
                    className='mb-2 h-auto w-full'
                    src="/assets/WebLogo.png"
                    alt="NextCart Logo - Go to Home"
                />
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0d989b] to-[#202570] bg-clip-text text-transparent">
                    NextCart
                </p>
            </div>
        </Link>
    );
};