import React from 'react'
import { Home, Settings, User, Bookmark, Plus } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-3xl p-4">
        <div className="flex justify-around items-center">
          <button className="p-3 rounded-full text-indigo-600 bg-indigo-50">
            <Home size={24} />
          </button>
          <button className="p-3 rounded-full text-gray-500 hover:text-indigo-600">
            <Bookmark size={24} />
          </button>
          <button className="p-3 rounded-full bg-indigo-600 text-white shadow-lg transform -translate-y-6">
            <Plus size={24} />
          </button>
          <button className="p-3 rounded-full text-gray-500 hover:text-indigo-600">
            <User size={24} />
          </button>
          <button className="p-3 rounded-full text-gray-500 hover:text-indigo-600">
            <Settings size={24} />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-24 pt-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
          <p className="text-gray-500">Discover new things today</p>
        </header>

        {/* Featured Card */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
          <img 
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643" 
            alt="Featured"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Featured Content</h2>
            <p className="text-gray-600 mb-4">Explore our latest collection of curated items just for you.</p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              View Now
            </button>
          </div>
        </div>

        {/* Grid Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <div className="grid grid-cols-2 gap-4">
            {['Technology', 'Design', 'Business', 'Health'].map((category) => (
              <div key={category} className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="font-medium">{category}</h3>
                <p className="text-sm text-gray-500 mt-1">Explore {category}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
