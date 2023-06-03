import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { json, useLocation, useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const  [, refetch] = useCart();

    const handleAddTOCart = (item) => {
        console.log(item)
        if(user && user.email){
            const cartItem = {menuItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data=> {
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food added on the cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })    
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state:{from:location}});
                }
              })
        }
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