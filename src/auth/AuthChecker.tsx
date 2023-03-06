import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithRedirect } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

interface Props {
    children: React.ReactNode;
}

const AuthChecker = ({ children }: Props) => {
    const navigate = useNavigate();

// This will just check if the user is logged in, if so, it returns the children
  // (which are passed as props - it's just whatever component is either protected
  // or not). Otherwise, it sends them to the login route

    useEffect(() => {
        if (!auth.currentUser) {
            navigate('../')
            signInWithRedirect(auth, Providers.google)
        }

        // Must include the brackets or else useEffect will try to run constantly:
    }, [])

  return (
    <>{children}</>
  )
}

export default AuthChecker