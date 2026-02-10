function Input({
    name,
    label,
    type = "text",
    id,
    value,
    onChange,
    required = false,
    className = ""
}) {
    return (
        <div className={`relative w-full flex justify-center ${className}`}>

            <div className="relative w-full max-w-105">
                <input
                    name={name}
                    type={type}
                    id={id}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder=" "
                    className="peer w-full border border-gray-400 rounded-md px-3 pt-5 pb-2
          focus:border-black focus:outline-none"
                />

                <label
                    htmlFor={id}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base
          transition-all duration-200 bg-white px-1
          peer-focus:top-0 peer-focus:text-xs peer-focus:font-bold peer-focus:text-black
          peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-black"
                >
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            </div>

        </div>
    );
}

export default Input;
