import React, { useEffect, useState } from 'react'

export default function FilterProducts() {
    const [products, setProducts] = useState([])
    const [productLists, setProductLists] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState([])
    const [msg, setMsg] = useState("all")

    const maincategoryBtn = ["all", ...new Set(products.map(irem => irem.maincategory))]
    const filterbutton = [...new Set(products.map(item => item.brand))]
    // console.log(filterbutton)
    const handleMaincategory = (item) => {
        if (item === "all") {
            setProductLists(products)
        } else {
            setProductLists(products.filter(all => all.maincategory === item))
        }
        setMsg(item)
    }
    const handleFilter = (item) => {
        addCategory(item)
    }
    // console.log(selectedCategory)
    const getApi = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/product", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const result = await response.json()
            // console.log(response.data)
            setProducts(result.data)
            setProductLists(result.data)
            setFilteredProducts(result.data)
        } catch (error) {
            console.log(error)
        }

    }
    const addCategory = (item) => {
        if (!selectedCategory.includes(item)) {
            setSelectedCategory(pre => [...pre, item])
        } else {
            const removedList = selectedCategory.filter(value => value !== item)
            setSelectedCategory(removedList)
        }
    }
    // console.log(selectedCategory)
    const filterProductWithCategory = () => {
        if (selectedCategory.length === 0) {
            setFilteredProducts(productLists)
        } else {
            setFilteredProducts(productLists.filter(item => selectedCategory.includes(item.brand)))
        }
    }
    const clearFilter = () => {
        setSelectedCategory([])
    }
    useEffect(() => {
        filterProductWithCategory()
        // eslint-disable-next-line
    }, [selectedCategory, productLists])

    useEffect(() => {
        getApi()
        // eslint-disable-next-line
    }, [])
    return (
        <div className='white--ground'>
            {products.length !== 0 && maincategoryBtn.map(item => {
                return <button key={item} onClick={() => handleMaincategory(item)}>{item}</button>
            })}
            {msg !== "all" && <span className='selected-msg'>selected Category: {msg}</span>}
            <div className='filter-button'>
                {products.length !== 0 &&
                    filterbutton.map((item, i) => {
                        return (
                            <span onClick={() => handleFilter(item)} className={selectedCategory.includes(item) ? "fitler-button-span1" : "fitler-button-span"} key={item}>{item}</span>
                        )
                    })
                }
                {/* <span onClick={clearFilter} className={selectedCategory.length === 0 ? "cleared-filter" : "clear-filter"}>clear_filter</span> */}
                {selectedCategory.length !== 0 && <span className='clear-filter' onClick={clearFilter}>clear_filter</span>}
            </div>

            <div className='filter-product-container'>
                {filteredProducts.length ? filteredProducts.map(item => {
                    return (
                        <div className='filter-product-list' key={item._id}>
                            <p className='filter-product-name'>{item.name}</p>
                            <p className='filter-product-brand'>Brand: {item.brand}</p>
                            <p className='filter-product-price'>Price: ₹ {item.finalprice} /-</p>
                            <img className='filter-product-img' src={`http://localhost:8000/public/uploads/products/${item.pic1}`} alt={item.name} />


                        </div>
                    )
                }) : <h3>no available products !</h3>}
            </div>
        </div>
    )
}
