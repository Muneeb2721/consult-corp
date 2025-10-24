import Image from 'next/image';

export default function Case() {
    return (
        <div className="bg-[#d5ffff]">
            <h1 className='font-semibold pt-10  text-center
            text-[28px]'>Featured Case Studies</h1> 
            <p className='text-center text-[20px]'>Explore how we have helped organizations achieve remarkable results</p>

            <div className="flex gap-4 py-15
            md:flex-row
            sm:mx-[70px] 
            flex-col mx-[20px]">
                <div className="about-card bg-white space-y-2 rounded shadow-[0px_2px_2px_0px]">
                    
                    <Image
                        src="/tech_giant.jpeg" // Path relative to the public directory
                        alt="A description of the image"
                        width={500} // Required for local images
                        height={300} // Required for local images
                        style={{ height: '250px', width: '400px' }}
                    />
 
                    <h2 className="text-[24px] font-semibold px-[25px]">Digital Transformation for Tech Giant</h2>
                    <p className='text-[20px] px-[25px]'>Helped a leading technology company modernize their infrastructure, resulting in 45% improved efficiency.</p>

                    <div className="link flex justify-end mr-5 mb-5">
                        <a href="#" className='py-2 px-5 bg-blue-700 text-white text-[18px] rounded'>Read more</a>
                    </div>
                </div>
                
                <div className="about-card bg-white space-y-2 rounded shadow-[0px_2px_2px_0px]">
                    
                    <Image
                        src="/planning.jpeg" // Path relative to the public directory
                        alt="A description of the image"
                        width={500} // Required for local images
                        height={300} // Required for local images
                        style={{ height: '250px', width: '400px' }}
                    />

                    <h2 className="text-[24px] font-semibold px-[25px]">Strategic Planning for Financial Services</h2>
                    <p className='text-[20px] px-[25px]'>Developed a 5-year growth strategy for a financial institution, driving 28% revenue increase.</p>

                    <div className="link flex justify-end mr-5 mb-5">
                        <a href="#" className='py-2 px-5 bg-blue-700 text-white text-[18px] rounded'>Read more</a>
                    </div>
                </div>

                <div className="about-card bg-white space-y-2 rounded shadow-[0px_2px_2px_0px]">
                    
                    <Image
                        src="/manufacturing.jpeg" 
                        alt="A description of the image"
                        width={500} 
                        height={300}
                        style={{ height: '250px', width: '400px' }}
                    />

                    <h2 className="text-[24px] font-semibold px-[25px]">Process Optimization for Manufacturing</h2>
                    <p className='text-[20px] px-[25px]'>Streamlined operations for a global manufacturer, reducing costs by 32% while improving quality.</p>

                    <div className="link flex justify-end mr-5 mb-5">
                        <a href="#" className='py-2 px-5 bg-blue-700 text-white text-[18px] rounded'>Read more</a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}