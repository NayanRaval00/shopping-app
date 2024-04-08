'use client'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().trim().email('Invalid email').required('Email is required'),
    password: yup.string().trim().required('Password is required'),
});
const LoginForm = ({ }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-outline form-white mb-4">
                    <input {...register('email')} type="email" id="typeEmailX" className="form-control form-control-lg" />
                    <p className="text-danger">{errors.email?.message}</p>
                    <label className="form-label" for="typeEmailX">Email</label>
                </div>

                <div className="form-outline form-white mb-4">
                    <input {...register('password')} type="password" id="typePasswordX" className="form-control form-control-lg" />
                    <p className="text-danger">{errors.password?.message}</p>
                    <label className="form-label" for="typePasswordX">Password</label>
                </div>

                <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
            </form>
        </>
    )
}

export default LoginForm