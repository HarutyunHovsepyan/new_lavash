import {RiFacebookFill,RiTwitterFill,RiInstagramFill} from '@remixicon/react';

const Footer = () =>{
    return(
        <footer className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center border-t-3 py-4">
                <div className="flex space-x-6 mb-2">
                    <a href="#" target='_blank' aria-label="Visit our Facebook">
                        <RiFacebookFill />
                    </a>
                    <a href="#" target='_blank' aria-label="Visit our Facebook">
                        <RiTwitterFill />
                    </a>
                    <a href="#" target='_blank' aria-label="Visit our Facebook">
                        <RiInstagramFill />
                    </a>
                </div>
            <p className="text-sm">&copy;2025 All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer