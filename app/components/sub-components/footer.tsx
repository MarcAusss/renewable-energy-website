import Form from 'next/form'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className="">
            <div className="">
                <div className="relative h-[60vh] w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/renewal-energy-solar-and-wind-for-web.jpg')", }}>
                    <div className="bg-linear-to-b from-[#5c8fff]/50 to-transparent p-5 rounded-b-xl h-full flex items-center flex-col justify-center">
                        <h1 className="text-4xl text-white">Ready to Power Your Future?</h1>
                        <p className="text-center text-white text-sm my-5 w-[25%]">
                            Join thousands switching to clean energy. Get your free consultation today.
                        </p>
                        <div className="mt-4 flex gap-5">
                            <button className="px-5 py-2 bg-[#D3F171] rounded-full cursor-pointer">Get Free Quote</button>
                            <button className="px-5 py-2 bg-[#ffffff4d] backdrop-blur-md rounded-full text-white cursor-pointer"><i className="fa-solid fa-phone"></i>+63 123-4567-123</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 py-5 flex justify-between max-w-7xl mx-auto">
                <div className="w-[30%]">
                    <h1 className="font-bold text-xl mb-2">Greenova</h1>
                    <p className="text-sm font-semibold mb-2">Subscribe</p>
                    <p className="text-sm mb-5">Join our newsletter to stay up to date on features and releases.</p>
                    <div className="mb-5">
                        <Form action="/search" className='flex items-center bg-[#dbdbdb50] justify-between p-2 rounded-4xl'>
                            <div className="p-2 bg-[#e2f89a] rounded-full">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <input name="query" placeholder='Enter your email' className='outline-0'/>
                            <button type="submit" className='px-5 py-2 bg-black text-white rounded-4xl'>Subscribe</button>
                        </Form>
                    </div>
                    <p className="">
                        By subscribing you agree to with our <Link href="" className="underline">Privacy Policy</Link>
                    </p>
                </div>
                <div className="flex justify-between w-[50%]">
                    <div className="flex flex-col gap-4">
                        <h1>Quick Links</h1>
                        <Link href="">Home</Link>
                        <Link href="">About</Link>
                        <Link href="">Services</Link>
                        <Link href="">Contact</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1>Services</h1>
                        <Link href="">Solar Panel Installation</Link>
                        <Link href="">Wind Turbine Solution</Link>
                        <Link href="">EV Charging Station</Link>
                        <Link href="">Maintenance Support</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1>Company</h1>
                        <Link href="">Contact Us</Link>
                        <Link href="">Emergency Help</Link>
                        <Link href="">FAQ</Link>
                        <Link href="">Privacy Policy</Link>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto flex justify-between border-t-2 py-5 border-gray-300">
                <p className="text-gray-400">© 2026 Greenova, All rights reserved.</p>
                <div className="flex gap-5">
                    <Link href="" className='border-r pr-5 border-black'>Terms of Services</Link>
                    <Link href="" className='border-r pr-5 border-black'>Privacy Policy</Link>
                    <Link href="" className=''>Compliance</Link>
                </div>
            </div>
        </div>
    );
}