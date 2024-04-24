import React from 'react'
import Link from 'next/link'
import UserAppLayout from './layouts/UserAppLayout'
import NotfoundIcon from './components/Icons/NotfoundIcon'

export default function NotFound() {
  return (
    <>
      <UserAppLayout>
        <div className='full-width-layout not-found-layout'>
          <div className='primary-content'>
            <div className='container'>
              <div className='glide-spacer s-100'></div>
              <section className='notfound-content text-center bg-gray-light p-60'>
                <div className='not-found-icon mb-30'>
                  <NotfoundIcon className='m-auto' />
                </div>
                <h1 className='page-title'>Error 404</h1>
                <div className='box-sub-head label_xxl font-ff-cld-semibold mt-30'>
                  Sorry, we couldn't find this page.
                </div>
                <div className='box-sub-head label_l font-ff-cld-medium mt-20'>
                  But dont worry, you can find plenty of other things on our homepage.
                </div>
                <div className='btn-block mt-30'>
                  <Link href='/' className='site-btn btn-secondary btn-padding'>
                    Back to homepage
                  </Link>
                </div>
              </section>
            </div>
            <div className='glide-spacer s-120'></div>
          </div>
        </div>
      </UserAppLayout>
    </>
  )
}
