'use client'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const schema = yup.object().shape({
    firstname: yup.string().trim().required('First Name is required'),
    lastname: yup.string().trim().required('Last Name is required'),
    mobile: yup.string().trim().required('Mobile Number is required'),
    email: yup.string().trim().email('Invalid email').required('Email is required'),
    password: yup.string().trim().required('Password is required'),
    confirm_password: yup.string().trim().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});
const RegisterForm = ({ }) => {
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
                    <input {...register('firstname')} type="text" id="typeEmailX" className="form-control form-control-lg" />
                    <p className="text-danger">{errors.firstname?.message}</p>
                    <label className="form-label" for="typeEmailX">First Name</label>
                </div>
                <div className="form-outline form-white mb-4">
                    <input {...register('lastname')} type="text" id="typeEmailX" className="form-control form-control-lg" />
                    <p className="text-danger">{errors.lastname?.message}</p>
                    <label className="form-label" for="typeEmailX">Last Name</label>
                </div>
                <div className="form-outline form-white mb-4">
                    <input {...register('mobile')} type="number" id="typeEmailX" className="form-control form-control-lg" />
                    <p className="text-danger">{errors.mobile?.message}</p>
                    <label className="form-label" for="typeEmailX">Mobile Number</label>
                </div>
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

                <div className="form-outline form-white mb-4">
                    <input {...register('confirm_password')} type="password" id="typePasswordX" className="form-control form-control-lg" />
                    <p className="text-danger">{errors.confirm_password?.message}</p>
                    <label className="form-label" for="typePasswordX">Confirm Password</label>
                </div>

                <button className="btn btn-outline-light btn-lg px-5" type="submit">Register</button>
            </form>
        </>
    )
}

export default RegisterForm