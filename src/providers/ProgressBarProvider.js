'use client'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

const ProgressBarProvider = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar height='4px' color='#A30000' options={{ showSpinner: false }} shallowRouting />
    </>
  )
}

export default ProgressBarProvider
