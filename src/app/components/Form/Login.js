'use client'
const LoginForm = ({ handleChange, loginForm, errors, register }) => {
    return (
        <>
            <div className="form-outline form-white mb-4">
                <input {...register('email')} type="email" id="typeEmailX" onChange={handleChange} className="form-control form-control-lg"
                    value={loginForm.email}
                />
                <p className="text-danger">{errors.email?.message}</p>
                <label className="form-label">Email</label>
            </div>

            <div className="form-outline form-white mb-4">
                <input {...register('password')} type="password" onChange={handleChange} id="typePasswordX" className="form-control form-control-lg"
                    value={loginForm.password}
                />
                <p className="text-danger">{errors.password?.message}</p>
                <label className="form-label">Password</label>
            </div>
            <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
        </>
    )
}

export default LoginForm