import React from 'react'

const Header = () => {
  return (
    <header className=" backdrop-blur-md bg-white/70 shadow-md border-b border-gray-200">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-700 tracking-tight">Users</h1>
      <nav className="space-x-4">
        <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Home</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">About</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Contact</a>
      </nav>
    </div>
  </header>
  )
}

export default Header