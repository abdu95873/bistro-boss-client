import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const SignUp = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const { createUser, updateUserProfile, reset, logOut } = useContext(AuthContext);
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile update');
                        // reset();
                        Swal.fire({
                            position: 'top-end',
                            icon:'success',
                            title: 'User created successfully?',
                            showConfirmButton: false,
                            timer: 1500
                           
                          });
                          logOut()
                          .then(()=>{
                            navigate('/login')
                          })
                    }).catch((error) => {
                        console.log(error);
                    });
            })
    }


    return (
        <>
            <Helmet>
                <title>Bistro | Sign Up</title>

            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign UP now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">


                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { require: true })} placeholder="name" className="input input-bordered" />

                                {errors.name && <span className="text-red-600">This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { require: true })} placeholder="Photo URL" className="input input-bordered" />

                                {errors.photoURL && <span className="text-red-600">This field is required</span>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 8,
                                    maxLength: 20,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

                                })} name='password' placeholder="password" className="input input-bordered" />

                                {errors.password && <span className="text-red-600">This field is required</span>}
                                {errors.password?.type == 'minLength' && <span className="text-red-600">password must be 6 characters</span>}
                                {errors.password?.type == 'maxLength' && <span className="text-red-600">password must be less then 6 characters</span>}
                                {errors.password?.type == 'pattern' && <span className="text-red-600">password must be have at least one letter, one number and one special character</span>}


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />

                            </div>
                        </form>
                        <p><small>Already have an account <Link className="text-red-600" to={'/login'}>Login</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;