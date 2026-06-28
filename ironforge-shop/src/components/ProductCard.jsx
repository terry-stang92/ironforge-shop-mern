import { useState } from 'react'

function ProductCard({ product, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(product.name)
  const [price, setPrice] = useState(product.price)
  const [category, setCategory] = useState(product.category)
  const [stock, setStock] = useState(product.stock)

  function handleSave() {
    onEdit({
      _id: product._id,
      name,
      price: Number(price),
      category,
      stock: Number(stock)
    })
    setIsEditing(false)
  }

  if (isEditing) {
    return (
              <div className='bg-zinc-900 border-2 border-yellow-400 rounded-xl p-5 flex flex-col gap-3'>
        <input value={name} onChange={e => setName(e.target.value)}
               placeholder='Product name'
               className='bg-zinc-800 text-white border border-zinc-600 rounded-lg p-2' />
        <input value={price} onChange={e => setPrice(e.target.value)}
               type='number' placeholder='Price'
               className='bg-zinc-800 text-white border border-zinc-600 rounded-lg p-2' />
        <select value={category} onChange={e => setCategory(e.target.value)}
                className='bg-zinc-800 text-white border border-zinc-600 rounded-lg p-2'>
          <option value='pre-workout'>Pre-Workout</option>
          <option value='protein'>Protein</option>
          <option value='recovery'>Recovery</option>
          <option value='vitamins'>Vitamins</option>
        </select>
        <input value={stock} onChange={e => setStock(e.target.value)}
               type='number' placeholder='Stock'
               className='bg-zinc-800 text-white border border-zinc-600 rounded-lg p-2' />
        <div className='flex gap-2'>
          <button onClick={handleSave}
                  className='flex-1 bg-yellow-400 text-black font-black py-2 rounded-lg'>SAVE</button>
          <button onClick={() => setIsEditing(false)}
                  className='flex-1 bg-zinc-700 text-white py-2 rounded-lg'>CANCEL</button>
        </div>
      </div>
    )
}
return (
    <div className='bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-yellow-400 transition-all duration-300 group'>
      <div className='relative h-48'>
        <img src={product.image} alt={product.name} className='w-full h-full object-cover' />
        <div className='absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent' />
        <span className='absolute top-3 left-3 bg-yellow-400 text-black text-xs font-black px-2 py-1 rounded-full uppercase'>
          {product.category}
        </span>
      </div>
      <div className='p-4'>
        <h2 className='text-white font-black text-xl uppercase group-hover:text-yellow-400 transition-colors'>
          {product.name}
        </h2>
        <p className='text-zinc-400 text-sm mb-3'>{product.description}</p>
        <div className='flex justify-between items-center mb-4'>
          <span className='text-yellow-400 font-black text-2xl'>${product.price}</span>
          <span className='text-zinc-400 text-sm'>Stock: {product.stock}</span>
        </div>
        <div className='flex gap-2'>
          <button onClick={() => setIsEditing(true)}
                  className='flex-1 border border-yellow-400 text-yellow-400 text-sm font-bold py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition-all'>
            EDIT
          </button>
          <button onClick={() => onDelete(product._id)}
                 className='flex-1 border border-zinc-600 text-zinc-400 text-sm font-bold py-2 rounded-lg hover:border-red-500 hover:text-red-500 transition-all'>
            DELETE
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

