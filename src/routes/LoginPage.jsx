import { SignIn } from "@clerk/clerk-react"

const LoginPage = () => {
  return (
    <div className='flex items-center justify-center h-[calc(100vh-80px)]'>
      <SignIn signUpUrl={import.meta.env.VITE_CLERK_SIGN_UP_URL} />
    </div>
  )
}

export default LoginPage