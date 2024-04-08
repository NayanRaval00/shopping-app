'use client'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const schema = yup.object().shape({
    firstName: yup.string().trim().required('First name is required'),
    lastName: yup.string().trim().required('Last name is required'),
    email: yup.string().trim().email('Invalid email').required('Email is required'),
    subject: yup.string().trim().required('Subject is required'),
    message: yup.string().required('Message is required'),
});

const ContactUs = ({
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        // Handle form submission here
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" {...register('firstName')} className="form-control" placeholder="Your firstname" />
                            <p className="text-danger">{errors.firstName?.message}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname"  {...register('lastName')} className="form-control" placeholder="Your lastname" />
                            <p className="text-danger">{errors.lastName?.message}</p>
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email"  {...register('email')} className="form-control" placeholder="Your email address" />
                            <p className="text-danger">{errors.email?.message}</p>
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" {...register('subject')} className="form-control" placeholder="Your subject of this message" />
                            <p className="text-danger">{errors.subject?.message}</p>
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message"  {...register('message')} cols="30" rows="10" className="form-control"
                                placeholder="Say something about us"></textarea>
                            <p className="text-danger">{errors.message?.message}</p>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Send Message" className="btn btn-primary" />
                </div>
            </form>
        </>
    )
}


export default ContactUs
