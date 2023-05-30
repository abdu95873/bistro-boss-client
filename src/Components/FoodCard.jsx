import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    const handleAddTOCart = (item) => {
        console.log(item)
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food" /></figure>
            <p className='absolute right-0 bg-slate-900 text-white mr-4 mt-4 px-2 rounded-xl'>Price: ${price}</p>
            <div className="card-body text-center flex flex-cols items-center">
                <h2 className="card-title ">{name}</h2>

                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddTOCart(item)} className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-400">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;