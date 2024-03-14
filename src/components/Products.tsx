import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

type Props = {}

const Products = (props: Props) => {
    const [status, setStatus] = useState(true)
    const [load, setload] = useState(true)
    const [products, setProduct] = useState([])
    const [page, setPage] = useState(1)

    const handleClick = () => {
        setStatus(!status)
    }

    const buttonClick = () => {
        setPage(page + 1)
    }
    const buttonClickpPrev = () => {
        setPage(page - 1)
    }
    useEffect(() => {
        fetch(`https://dummyjson.com/products?skip=${(page - 1) * 9}&limit=9`)
            .then((res) => res.json()).then((data) => {
                setProduct(data.products);
            })
    }, [page])
    return (
        <>
            {/* Start Featured Product */}
            <section className="bg-light">
                <div className="container py-5">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Featured Product</h1>
                            <p>
                                Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                    <div className="box d-flex gap-1">
                                {products.map((products: any) => {
                                    return (
                                        <div className="card">
                                            <img src={products.thumbnail} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title"> <a className="title">{products.title}</a> </h5>
                                                <p className="card-price">
                                                    {products.price}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                    </div>
                </div>
            </section>
            {/* End Featured Product */}
        </>

    )
}

export default Products