import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../interfaces/IProduct";
import { createProducts } from "../slice/product";
import { useNavigate } from "react-router-dom";

type Props = {};

const Add = (props: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IProduct>();
    const navigate = useNavigate();
    const onHandleSubmit: SubmitHandler<IProduct> = (data) => {
        dispatch(createProducts(data)).then(() => {
            navigate("/");
        });
    };
    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="card-header">ADD</div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onHandleSubmit)}>
                            <input type="text" {...register("name")}/>
                            <input type="number" {...register("price")} />
                            <button>Thêm mới</button>
                        </form>
                    </div>
                    <div className="card-footer text-muted">Footer</div>
                </div>
            </div>
        </div>
    );
};

export default Add;
