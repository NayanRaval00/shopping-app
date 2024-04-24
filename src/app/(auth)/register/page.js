'use client'
import RegisterForm from '@/app/components/Form/RegisterForm';
import '../../../../public/css/bootstrap.min.css';
import '../../../../public/css/login-css.css';
import Link from 'next/link';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import AlertMessage from '@/app/components/AlertMessage/AlertMessage';
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react';
import { userRegister } from '../../../../lib/api/auth/auth';


const Registration = () => {

    const [successAlert, setSuccessAlert] = useState(null)
    const [errorAlert, setErrorAlert] = useState(null)
    const { userData } = useSession();
    const [registrationForm, setRegistrationForm] = useState({
        email: '',
        password: ''
    })

    const schema = yup.object().shape({
        firstname: yup.string().trim().required('First Name is required'),
        lastname: yup.string().trim().required('Last Name is required'),
        mobile: yup.string().trim().required('Mobile Number is required'),
        email: yup.string().trim().email('Invalid email').required('Email is required'),
        password: yup.string().trim().required('Password is required'),
        confirm_password: yup.string().trim().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    });
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async event => {
        try {
            const res = await userRegister(data)
            if (res.status == 'success') {
                setSuccessAlert(res.message)
                reset()
                setLoading(false)
            }
        } catch (error) {
            const entries = error.errors
            for (const field in entries) {
                setError(field, { message: entries[field][0] })
            }
            if (error?.errors && error?.errors.length == 0) {
                setErrorAlert(error.message)
            }
            setLoading(false)
        }
    }

    useEffect(() => {
        if (userData?.user) {
            window.location.href = path ? path : '/'
        }
    }, [userData])
    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ borderRadius: 1 }}>
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <AlertMessage
                                            successAlert={successAlert}
                                            setSuccessAlert={setSuccessAlert}
                                            errorAlert={errorAlert}
                                            setErrorAlert={setErrorAlert}
                                        />
                                        <RegisterForm
                                            // handleChange={handleChange}
                                            registrationForm={registrationForm}
                                            register={register}
                                            errors={errors}
                                        />
                                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Register</button>
                                    </form>

                                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                        <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                        <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                        <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                    </div>
                                </div>

                                <div>
                                    <p className="mb-0">Do you have already account?
                                        <Link href='/login' className="text-white-50 fw-bold">Login</Link>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Registration
