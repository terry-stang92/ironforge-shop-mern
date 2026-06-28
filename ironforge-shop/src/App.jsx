import { useState, useEffect } from 'react'
import api from './api/axios'
import ProductCard from './components/ProductCard'

function App() {
  const [products, setProducts] = useState([])
  const [activeFilter, setActiveFilter] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get('/products')
        setProducts(res.data)

     } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  async function handleDelete(id) {
    await api.delete('/products/' + id)
    setProducts(products.filter(p => p._id !== id))
  }

  async function handleEdit(updatedProduct) {
    const res = await api.put('/products/' + updatedProduct._id, updatedProduct)
    setProducts(products.map(p =>
      p._id === res.data._id ? res.data : p
    ))
  }

  const filtered = activeFilter === 'all'
    ? products
    : products.filter(p => p.category === activeFilter)

    if (loading) {
    return <p className='text-white text-center p-8 text-xl'>Loading products...</p>
  }

  return (
    <div className='min-h-screen bg-zinc-950'>
      <div className='max-w-6xl mx-auto px-6 py-8'>
        <h1 className='text-yellow-400 font-black text-4xl uppercase mb-8'>
          IronForge Shop
        </h1>
        <div className='flex gap-3 mb-8 flex-wrap'>
          {['all', 'protein','protein', 'recovery', 'clothing'].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg font-bold uppercase text-sm
                ${activeFilter === cat
                  ? 'bg-yellow-400 text-black'
                  : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}`}
            >
              {cat}
            </button>
          ))}
                  </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filtered.map(product => (
            <ProductCard
              key={product._id}
              product={product}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

