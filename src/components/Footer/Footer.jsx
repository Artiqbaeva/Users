function Footer() {
  return (
    <footer className="bg-white/70 backdrop-blur-lg border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700">
        
        <div>
          <h3 className="text-xl font-semibold text-blue-700">Users App</h3>
          <p className="mt-2 text-gray-600">
            A modern solution to manage, view, and interact with your user base efficiently.
          </p>
        </div>

      
        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold text-gray-800">Explore</h4>
          <a href="#" className="hover:text-blue-600 transition">Dashboard</a>
          <a href="#" className="hover:text-blue-600 transition">Users</a>
          <a href="#" className="hover:text-blue-600 transition">Settings</a>
          <a href="#" className="hover:text-blue-600 transition">Support</a>
        </div>

       
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Get in Touch</h4>
          <p>Need help or want to give feedback?</p>
          <a
            href="#"
            className="mt-2 inline-block text-blue-600 hover:underline"
          >
            Contact Support
          </a>
        </div>
      </div>

      
      <div className="border-t border-gray-300 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Users App. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
