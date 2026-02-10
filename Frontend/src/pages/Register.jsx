import { useState } from "react";
import { assets } from "../assets/assets.js";
import Input from "../components/Input.jsx";
import { useNavigate } from "react-router-dom";

function Register() {

    const [roleError, setRoleError] = useState("");
    const navigate = useNavigate();

    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        role: ''
    });

    function handleRoleChange(selectedRole) {
        setRegisterData(prev => ({
            ...prev,
            role: prev.role === selectedRole ? "" : selectedRole
        }));
        setRoleError("");
    }

    function handleChange(e) {
        const { name, value } = e.target;

        setRegisterData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleForm(event) {
        event.preventDefault();

        if (!registerData.role) {
            setRoleError("Please select at least one role");
            return;
        }

        setRoleError(""); // clear error
        console.log(registerData);

        navigate("/login");
    }

    return (
        <div className="flex ">
            <div className="bg-[#fcfafa] min-w-120 max-w-120 min-h-screen max-md:hidden">
                <h1 className="mt-15 text-center font-extrabold text-[30px]">Hi, Welcome Back</h1>
                <p className="text-[16px] text-center">More effectively with optimized workflows.</p>
                <img src={assets.loginImage} alt="" className="mt-20" />
            </div>
            <div className="pt-20 pb-20 pl-4 pr-4 w-full max-w-105 max-md:m-auto md:mx-auto">
                <h1 className="text-[19px] font-bold max-md:text-center">Sign up to your account</h1>

                <form onSubmit={handleForm}>
                    <div>
                        <Input label={"Name"} className="mt-10" onChange={handleChange} type="text" id="text" name="name" required={true} ></Input>
                        <Input label={"Email Address"} className="mt-5" onChange={handleChange} type="email" id="email" name="email" required={true} ></Input>
                        <Input label={"Password"} className="mt-5" onChange={handleChange} type="password" id="password" name="password" required={true}></Input>

                        <div className="mt-5">
                            <p className="font-bold">Role</p>
                            <div className="flex gap-3">
                                <div>
                                    <input
                                        type="checkbox"
                                        id="developer"
                                        checked={registerData.role === "developer"}
                                        onChange={() => handleRoleChange("developer")}
                                    />
                                    <label htmlFor="developer" className="ml-1">Developer</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="tester"
                                        checked={registerData.role === "tester"}
                                        onChange={() => handleRoleChange("tester")}
                                    />
                                    <label htmlFor="tester" className="ml-1">Tester</label>
                                </div>
                            </div>
                            {roleError && (
                                    <p className="text-red-500 text-sm mt-1">{roleError}</p>
                            )}
                        </div>

                    </div>
                    <button className="bg-black mt-5 text-white pt-2 pb-2 rounded-md hover:bg-white hover:text-black border-2 w-full">Sign up</button>
                </form>


            </div>
        </div>
    )

};

export default Register;