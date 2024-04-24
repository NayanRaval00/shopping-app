'use client'
const RegisterForm = ({ RegisterForm, errors, register }) => {

    return (
        <>
            <div className="form-outline form-white mb-4">
                <input {...register('firstname')} type="text" id="typeEmailX" className="form-control form-control-lg" />
                <p className="text-danger">{errors.firstname?.message}</p>
                <label className="form-label" >First Name</label>
            </div>
            <div className="form-outline form-white mb-4">
                <input {...register('lastname')} type="text" id="typeEmailX" className="form-control form-control-lg" />
                <p className="text-danger">{errors.lastname?.message}</p>
                <label className="form-label" >Last Name</label>
            </div>
            <div className="form-outline form-white mb-4">
                <input {...register('mobile')} type="number" id="typeEmailX" className="form-control form-control-lg" />
                <p className="text-danger">{errors.mobile?.message}</p>
                <label className="form-label" >Mobile Number</label>
            </div>
            <div className="form-outline form-white mb-4">
                <input {...register('email')} type="email" id="typeEmailX" className="form-control form-control-lg" />
                <p className="text-danger">{errors.email?.message}</p>
                <label className="form-label" >Email</label>
            </div>
            <div className="form-outline form-white mb-4">
                <input {...register('password')} type="password" id="typePasswordX" className="form-control form-control-lg" />
                <p className="text-danger">{errors.password?.message}</p>
                <label className="form-label" >Password</label>
            </div>

            <div className="form-outline form-white mb-4">
                <input {...register('confirm_password')} type="password" id="typePasswordX" className="form-control form-control-lg" />
                <p className="text-danger">{errors.confirm_password?.message}</p>
                <label className="form-label" >Confirm Password</label>
            </div>

        </>
    )
}

export default RegisterForm