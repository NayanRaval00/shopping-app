'use client'

import Link from 'next/link';
import '../../../../public/css/bootstrap.min.css';
import '../../../../public/css/login-css.css';
import LoginForm from "@/app/components/Form/Login"
import { AuthProvider } from '@/context/AuthContext';
import { useState, useEffect, Suspense } from 'react';
import { useSession } from 'next-auth/react';
import { signIn, getSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import AlertMessage from '@/app/components/AlertMessage/AlertMessage';
import useCookieOperations from '../../../../lib/useCookieOperations';

const LoginComponent = () => {
    const { data: userData, status } = useSession();
    const urlParams = useSearchParams();
    const [successAlert, setSuccessAlert] = useState(null);
    const [errorAlert, setErrorAlert] = useState(null);
    const { setCookieValue } = useCookieOperations('user_data');
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    });

    const error = urlParams.get('error');
    const referrer = urlParams.get('referrer');
    const path = referrer ? new URL(referrer).pathname : null;

    const onSubmit = async () => {
        const session = await getSession();

        try {
            const res = await signIn('login', { ...loginForm, redirect: false });
            if (res.error) {
                setErrorAlert(res.error);
            }
        } catch (error) {
            setErrorAlert(error.message, "error");
        }
    };

    const schema = yup.object().shape({
        email: yup.string().trim().email('Invalid email').required('Email is required'),
        password: yup.string().trim().required('Password is required'),
    });

    const {
        register,
        setValue,
        trigger,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setLoginForm(prevValues => ({
            ...prevValues,
            [name]: value
        }));
        if (name === 'email') {
            setValue('email', value);
            trigger('email');
        } else {
            setValue('password', value);
            trigger('password');
        }
    };

    useEffect(() => {
        if (userData?.user) {
            setCookieValue(userData.user);
            window.location.href = path ? path : '/';
        }
    }, [userData, setCookieValue, path]);

    useEffect(() => {
        if (error) {
            setErrorAlert(error);
        }
    }, [error]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    return (
        <section className="vsh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ borderRadius: 1 }}>
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>
                                    <AuthProvider>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <AlertMessage
                                                successAlert={successAlert}
                                                setSuccessAlert={setSuccessAlert}
                                                errorAlert={errorAlert}
                                                setErrorAlert={setErrorAlert}
                                            />
                                            <LoginForm
                                                handleChange={handleChange}
                                                loginForm={loginForm}
                                                register={register}
                                                errors={errors}
                                            />
                                            <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                                        </form>
                                    </AuthProvider>
                                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                        <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                        <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                        <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                    </div>
                                </div>
                                <div>
                                    <p className="mb-0">Don't have an account? <Link href='/register' className="text-white-50 fw-bold">Register</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Login = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <LoginComponent />
    </Suspense>
);

export default Login;
