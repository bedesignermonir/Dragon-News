import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex items-center justify-center'>

            {/* 2. Increased max-w to 'max-w-lg' for more width */}
            <main className='w-full max-w-lg mx-auto'>

                {/* 3. Removed h-screen from here and added flex properties to center internal content */}
                <div className="card bg-base-100 shadow-2xl min-h-[300px] flex flex-col justify-center">

                    {/* 4. Increased padding (p-10) to make the white area feel much larger */}
                    <div className="card-body p-10">

                        <h1 className='text-center font-bold text-3xl py-5'>Register your account</h1>

                        <hr className="my-4" />

                        <fieldset className="fieldset gap-4">
                            {/* Name */}
                            <label className="label font-semibold">Name</label>
                            <input type="text" className="input input-bordered w-full" placeholder="Enter your Name" />
                            {/* Name */}

                            {/* photo */}
                            <label className="label font-semibold">Photo URL</label>
                            <input type="text" className="input input-bordered w-full" placeholder="Place your Photo URL" />
                            {/* photo */}

                            {/* email */}
                            <label className="label font-semibold">Email</label>
                            <input type="email" className="input input-bordered w-full" placeholder="Email" />
                            {/* email */}

                            {/* password */}
                            <label className="label font-semibold">Password</label>
                            <input type="password" className="input input-bordered w-full" placeholder="Password" />
                            {/* password */}

                            <label className="label">
                                <input type="checkbox" defaultChecked className="checkbox" />
                                Accept <span className='font-bold'>Term & Conditions</span>
                            </label>

                            <button className="btn btn-neutral mt-6 w-full">Register</button>

                        </fieldset>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Register;