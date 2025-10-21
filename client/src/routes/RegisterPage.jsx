import { SignUp } from "@clerk/clerk-react"

const RegisterPage = () => {
  return (
    <div className='flex items-center justify-center h-[calc(100vh-80px)]'>
      <SignUp  signInUrl={import.meta.env.VITE_CLERK_SIGN_IN_URL}/>
    </div>
  )
}

export default RegisterPage