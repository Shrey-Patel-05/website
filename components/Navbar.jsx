import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 mt-8 z-30 hidden md:flex justify-center text-sm">
                <div className="bg-transparent backdrop-blur-3xl  border py-4 px-3 rounded-md">
                    {/* Pages */}
                    <ul className="flex space-x-2 font-title font-bold shadow-2xl">
                        <li><a href="/" className="text-primary hover:text-primary/70 p-2">Home</a></li>
                        <li><a href="projects" className="mr-3 text-primary hover:text-primary/70">Projects</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar