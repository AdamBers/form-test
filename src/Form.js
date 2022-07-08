import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const Form = () => {
    const formik = useFormik({
        initialValues: {
            cardNumber: '',
            expirationDate: '',
            cvv: '',
            amount: '',
        },
        validationSchema: Yup.object({
            cardNumber: Yup.string()
                .max(16, 'Must be 15 characters or less')
                .required('Required'),
            expirationDate: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            cvv: Yup.string()
                .max(3, 'Must be 3 characters')
                .required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='in'>
                <label htmlFor="cardNumber">cardNumber</label>
                <input
                    id="cardNumber"
                    name="cardNumber"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cardNumber}
                />
            </div>
            {formik.touched.cardNumber && formik.errors.cardNumber ? (
                <div className='error'>{formik.errors.cardNumber}</div>
            ) : <div className='error'></div>}

            <div className='in'>
                <label htmlFor="expirationDate">expirationDate</label>
                <input
                    id="expirationDate"
                    name="expirationDate"
                    type="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.expirationDate}
                />
            </div>
            {formik.touched.expirationDate && formik.errors.expirationDate ? (
                <div className='error'>{formik.errors.expirationDate}</div>
            ) : <div className='error'></div>}

            <div className='in'>
                <label htmlFor="cvv">cvv</label>
                <input
                    id="cvv"
                    name="cvv"
                    type="number"
                    placeholder='000'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cvv}
                />
            </div>
            {formik.touched.cvv && formik.errors.cvv ? (
                <div className='error'>{formik.errors.cvv}</div>
            ) : <div className='error'></div>}

            <button type="submit">Submit</button>
        </form >
    );
};