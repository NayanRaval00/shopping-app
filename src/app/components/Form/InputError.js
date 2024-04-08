const InputError = ({ error, className = '' }) => (
    <>
      {error && <div className={`${className ? className : ''} error-text text-red text-sm mt-7`}>{error.message}</div>}
    </>
  )
  
  export default InputError
  