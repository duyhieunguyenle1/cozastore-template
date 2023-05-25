import React, { useContext, useState } from 'react'
import { ProductContext } from "../../contexts/ProductContext";
import { AiOutlineLoading, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import ProductsItem from './ProductsItem';

const Products = () => {
    const filters = [
        {
            category: 'all',
            title: 'All Products'
        },
        {
            category: "women's clothing",
            title: 'Women'
        },
        {
            category: "men's clothing",
            title: 'Men'
        },
        {
            category: 'jewelery',
            title: 'Jewelery'
        },
        {
            category: 'electronics',
            title: 'Electronic'
        },
    ]

    const { products, visible, setVisible } = useContext(ProductContext)
    const isLoading = (products?.length == 0)

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [filteredProducts, setFilteredProducts] = useState('all');

    const currentURL = useLocation().pathname

    return (
        <section className={`${currentURL != '/' ? 'pt-28' : 'pt-6'} pb-36`}>
            {isLoading ? <AiOutlineLoading
                className='mx-auto mt-8 animate-spin text-5xl'
            /> :
                <div className='container mx-auto px-4'>
                    {currentURL != '/' ? <></> :
                        <div className='pb-3'>
                            <h3 className='uppercase font-bold text-4xl'>Product Overview</h3>
                        </div>
                    }
                    <div className='flex pb-[52px] justify-between flex-wrap'>
                        <div className='flex my-2 items-center'>
                            {filters.map((filter, index) => {
                                return <button className={`my-1 mr-8 border-b-[1px] hover:opacity-100 
                                    hover:border-black transition-all duration-300 
                                    ${filter.category === filteredProducts ? 'opacity-100 border-black' : ' border-transparent opacity-70 '}`}
                                    onClick={() => setFilteredProducts(filter.category)} key={index}>
                                    {filter.title}
                                </button>
                            })}
                        </div>
                        <div className={`my-2 flex items-center justify-end border rounded-sm 
                        h-[40px] text-[#888] border-[#e6e6e6] hover:text-white hover:bg-button 
                        cursor-pointer transition-all duration-300 ${isSearchOpen ? 'bg-gray-100' : ''}`}
                            onClick={() => {
                                setIsSearchOpen(!isSearchOpen);
                                if (isSearchOpen) setSearchInput('');
                            }}>
                            <div className='flex items-center justify-center min-w-[110px]'>
                                {isSearchOpen ? <AiOutlineClose className='mr-2' /> : <AiOutlineSearch className='mr-2' />}
                                Search
                            </div>
                        </div>
                        <div className={`mt-2 mb-3 w-full transition-all duration-1000 animate-slideIn origin-top ${isSearchOpen ? 'block' : 'hidden'}`}>
                            <div className='pl-[15px] border rounded-sm flex'>
                                <button className='w-[38px] h-[60px] flex justify-center items-center'><AiOutlineSearch /></button>
                                <input type="text" placeholder='Search'
                                    className='outline-none h-[60px] w-[calc(100%-38px)]'
                                    onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
                                    onKeyDown={(e) => { if (e.key === 'Enter') e.target.value = '' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                        {products.slice(0, visible).map(product => {
                            if (filteredProducts === 'all' && product.title.toLowerCase().includes(searchInput))
                                return <ProductsItem
                                    key={product.id}
                                    id={product.id}
                                    image={product.image}
                                    title={product.title}
                                    price={product.price}
                                    heart={product.heart}
                                    product={product}
                                />
                            if (filteredProducts === product.category && product.title.toLowerCase().includes(searchInput))
                                return <ProductsItem
                                    key={product.id}
                                    id={product.id}
                                    image={product.image}
                                    title={product.title}
                                    price={product.price}
                                    heart={product.heart}
                                    product={product}
                                />
                        })}
                    </div>
                    <div className='flex items-center justify-center pt-20'>
                        <button className='uppercase bg-[#e6e6e6] font-medium px-4 py-3 rounded-full 
                    w-[180px] hover:text-white hover:bg-black transition-all duration-300'
                            onClick={() => setVisible(visible + 4)}>
                            Load More
                        </button>
                    </div>
                </div>
            }
        </section>
    )
}

export default Products