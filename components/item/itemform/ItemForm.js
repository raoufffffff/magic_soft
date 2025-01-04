"use client"
import React, { useState } from 'react';
import states from '@/constans/states'; // Assuming this contains state data (id, name, and cities)
import etat from '@/constans/etat'; // Assuming this contains city data based on state code
import { IoPricetagOutline } from "react-icons/io5";
import { GrDeliver } from "react-icons/gr";
import { FaMinus, FaPlus } from "react-icons/fa6";


const ItemForm = ({price}) => {
    const [user, setUser] = useState({
        name: "",
        phone: "",
        state: "",
        city: "",
        q: 1,
        price: price,
        home: true
    });
const [show, setshow] = useState(false)
    const [stateid, setStateid] = useState("0");

    // Handle input changes for name, phone, and state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    // Handle selecting a state
    const handleStateChange = (e) => {
        const selectedState = e.target.value;
        setUser({ ...user, state: selectedState });

        // Find the state object from the list of states
        const selectedStateObj = states.find(state => state.name === selectedState);
        setStateid(selectedStateObj?.id || 0);

        // Update cities based on selected state
    };

    // Handle selecting a city (optional, if the state has cities)
    const handleCityChange = (e) => {
        setUser({ ...user, city: e.target.value });
    };

    console.log(user, stateid);

    return (
        <div className="w-full md:w-6/12 capitalize mt-10 rounded-xl border-2 py-5 px-2 border-black">
            <h2 className="text-center font-bold">remplissez le formulaire pour commander</h2>
            <div className="flex w-full flex-wrap justify-evenly mt-5 items-center">
                <input
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    className="w-[45%] my-2 placeholder:capitalize p-3 border-2 border-[#aaa7] rounded-xl"
                    placeholder="nom et prenom"
                />
                <input
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    className="w-[45%] my-2 placeholder:capitalize p-3 border-2 border-[#aaa7] rounded-xl"
                    placeholder="numéro de téléphone"
                />
                <select
                    name="state"
                    value={user.state}
                    onChange={handleStateChange}
                    className="w-[45%] capitalize relative appearance-auto marker:hidden font-bold my-2 placeholder:capitalize p-3 px-3 border-2 border-[#aaa7] rounded-xl"
                    placeholder="votre wilaya"
                >
                    <option value="" className="capitalize font-bold">votre wilaya</option>
                    {states.map((e) => (
                        <option value={e.name} key={e.id} className="capitalize font-bold">
                            {e.name}
                        </option>
                    ))}
                </select>

                {/* City Select (only enabled when a state is selected) */}
                <select
                    name="city"
                    value={user.city}
                    onChange={handleCityChange}
                    disabled={etat.filter(e=> e.state_code == stateid).length === 0}
                    className="w-[45%] my-2 placeholder:capitalize p-3 px-3 border-2 border-[#aaa7] rounded-xl"
                    placeholder="votre ville"
                >
                    <option value="" className="capitalize font-bold">votre ville</option>
                    {etat.filter(e=> e.state_code == stateid).length > 0 ? (
                        etat.filter(e=> e.state_code == stateid).map((city, index) => (
                            <option value={city.name} key={index} className="capitalize font-bold">
                                {city.name}
                            </option>
                        ))
                    ) : (
                        <option disabled className="capitalize font-bold">
                            Aucune ville disponible
                        </option>
                    )}
                </select>
            </div>
            <h3
            className='px-2 font-bold my-2'
            >
            lieu de livraison
            </h3>
            <div
            onClick={()=>setUser({...user, home: true})}
            className='flex items-center px-2 my-2 cursor-pointer'
            >
                <span
                className='p-1 rounded-full mr-3 border border-black flex  items-center'
                >
                    <span
                    className={`rounded-full  flex  w-3 h-3  ${user.home && "bg-black"}`}
                    ></span>
                </span>
                <span>à domicile</span>
                <span
                className='ml-auto'
                >0 DA</span>
            </div>
            <div
                        onClick={()=>setUser({...user, home: false})}
            className='flex items-center px-2 my-2 cursor-pointer'
            >
                <span
                className='p-1 rounded-full mr-3 border border-black flex  items-center'
                >
                    <span
                    className={`rounded-full  flex  w-3 h-3  ${!user.home && "bg-black"}`}
                    ></span>
                </span>
                <span>au bureau de livraison</span>
                <span
                className='ml-auto'
                >0 DA</span>
            </div>
            <p
            onClick={()=> setshow(true)}
            className='ml-2 bg-black uppercase font-[500] cursor-pointer text-white px-2 py-1 rounded-xl mt-4 mb-2 flex w-fit items-center'
            >
            Appliquer un code promo
            <IoPricetagOutline className='ml-2' />
            </p>
            {show && 
            <div
            onClick={()=> setshow(false)}
            className='fixed top-0 bg-[#000a] left-0 w-full h-full flex justify-center items-center'
            >
                <div
                        onClick={(e) => e.stopPropagation()}  // Prevents the event from propagating to the parent div
                className='w-11/12 md:w-7/12 px-2 py-7 bg-white rounded-xl'
                >
                    <h4
                    className='font-bold capitalize mb-3'
                    >Appliquer un code promo</h4>
                    <input 
                    className='w-[95%] my-2 mx-auto placeholder:capitalize p-3 border-2 border-[#aaa7] rounded-xl'
                    placeholder='code promo'
                    />
                    <div
                    className='flex justify-end px-5 mt-3'
                    >
                    <button
                    onClick={()=> setshow(false)}
                    className='bg-[#1f293733] font-bold mr-5 uppercase  text-sm px-4 py-3 rounded-lg '
                    >fermer</button>
                    <button
                         className='bg-[#000] text-white text-sm  font-bold uppercase px-4 py-3 rounded-lg '
                    >appliquer</button>
                    </div>
                </div>
                </div>}
            <div
            className='flex mt-4 justify-between px-2 items-center text-xs' 
            >
                <span
                className='text-[#000e] '
                >frais de livraison</span>
                <span
                className={`bg-[#1f293733] ${!user.state && "text-[10px]" }  rounded-xl  py-2 px-4 font-bold flex items-center`}
                >
                    {user.state && <GrDeliver className='mr-2' size={18} />                    }
                    {user.state ? "livraison gratuite" : "choisir la wilaya et le lieu"}</span>
            </div>
            <div
            className='flex mt-2 justify-between px-2 items-center text-xs' 
            >
                <span
                className='text-[#000e] '
                >fproduits</span>
                <span
                className={` py-2 px-4 font-bold flex items-center`}
                >
                    {user.price * user.q} DA</span>
            </div>
            <div
            className='flex mt-3 justify-between px-2 '
            >
                <span>coût total</span>
                <span className="text-green-600 text-lg"
                >
                    {user.price * user.q} DA</span>
            </div>
            <div
            className='flex px-2 mt-3 items-center'
            >
                <div
                className='flex w-6/12 items-center'
                >
                    <button
                    onClick={()=> setUser({...user, q: user.q + 1})}
                    className='bg-[#5c718f33] font-bold  uppercase  text-sm p-4  rounded-lg '
                    >
                        <FaPlus />
                    </button>
                    <span
                    className='mx-3 text-xl font-bold'
                    >{user.q}</span>
                    <button
                    onClick={()=> setUser({...user, q: user.q == 1 ? user.q : user.q - 1})}
                    className='bg-[#5c718f33] font-bold  uppercase  text-sm p-4  rounded-lg '
                    >
                        <FaMinus />
                    </button>
                </div>
                <span
                className='py-1.5 font-bold shadow-xl flex justify-center items-center uppercase rounded-xl text-xs w-6/12  bg-black text-white text-center'
                >commandez maintenant</span>
            </div>
        </div>
    );
};

export default ItemForm;
