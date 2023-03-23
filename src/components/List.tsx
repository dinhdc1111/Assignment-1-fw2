import React, { useEffect } from "react";
import { fetchProducts } from "../slice/product";
import { RootState } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { Link } from "react-router-dom";

type Props = {};

const List = (props: Props) => {
    const dispatch = useAppDispatch();
    const { value: products, isLoading } = useAppSelector(
        (state: RootState) => state.product
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="card-header">Product List</div>
                    <div className="card-body">
                        <Link to={"/add"} className="btn btn-primary">ADD</Link>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((item) => (
                                    <tr>
                                        <td scope="row">{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer text-muted">Footer</div>
                </div>
            </div>
        </div>
    );
};

export default List;
