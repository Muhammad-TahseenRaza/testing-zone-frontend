import { useState } from "react";
import { assets } from "../assets/assets.js";
import Input from "../components/Input.jsx";

function Register() {

    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setRegisterData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleForm(event) {
        event.preventDefault();
        console.log(registerData);
    }

    return (
        <div className="flex ">
            <div className="bg-[#fcfafa] min-w-120 max-w-120 min-h-screen max-md:hidden">
                <h1 className="mt-15 text-center font-extrabold text-[30px]">Hi, Welcome Back</h1>
                <p className="text-[16px] text-center">More effectively with optimized workflows.</p>
                <img src={assets.loginImage} alt="" className="mt-20" />
            </div>
            <div className="pt-20 pb-20 pl-4 pr-4 w-full max-w-105 max-md:m-auto md:mx-auto">
                <h1 className="text-[19px] font-bold max-md:text-center">Sign in to your account</h1>

                <form onSubmit={handleForm}>
                    <div>
                        <Input label={"Name"} className="mt-10" onChange={handleChange} type="text" id="text" name="name" required={true} ></Input>
                        <Input label={"Email Address"} className="mt-5" onChange={handleChange} type="email" id="email" name="email" required={true} ></Input>
                        <Input label={"Password"} className="mt-5" onChange={handleChange} type="password" id="password" name="password" required={true}></Input>
                        <p>Role</p>
                        <input type="checkbox" id="developer" />
                        <label htmlFor="developer"></label>
                    </div>
                    <button className="bg-black mt-5 text-white pt-2 pb-2 rounded-md hover:bg-white hover:text-black border-2 w-full">Sign in</button>
                </form>


            </div>
        </div>
    )

};

export default Register;