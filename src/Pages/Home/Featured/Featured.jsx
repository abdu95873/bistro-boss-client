import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle
                heading="Featured Item"
                subHeading="Check it out"
            ></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20,2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro et nemo culpa officiis ipsa placeat aliquam obcaecati asperiores, harum sed minima sint autem accusamus quam. Temporibus, non eveniet cupiditate qui totam animi, praesentium facere eaque, magni labore doloremque voluptas blanditiis!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>

                </div>
            </div>
        </div>
    );
};

export default Featured;