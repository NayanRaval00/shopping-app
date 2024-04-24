import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AlertMessage = ({ successAlert, setSuccessAlert, errorAlert, setErrorAlert }) => {
  useEffect(() => {
    if (successAlert) {
      toast.success(successAlert, {
        onClose: () => setSuccessAlert(null),
        autoClose: false,
        className: 'ts-alert ts-alert-success'
      })
    }

    if (errorAlert) {
      toast.error(errorAlert, {
        onClose: () => setErrorAlert(null),
        autoClose: false,
        className: 'ts-alert ts-alert-danger'
      })
    }

    // Set a timer to close the alert after 3000 milliseconds
    const timer = setTimeout(() => {
      toast.dismiss()
    }, 3000)

    // Clear the timer when the component unmounts or when the alert is closed manually
    return () => {
      clearTimeout(timer)
    }
  }, [successAlert, setSuccessAlert, errorAlert, setErrorAlert])

  return null // Return null since the toast will be displayed by react-toastify
}

export default AlertMessage
