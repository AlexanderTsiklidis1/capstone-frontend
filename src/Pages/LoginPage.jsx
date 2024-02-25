import { Login } from '../Components/Login'

export const LoginPage = ({currentUser, setCurrentUser}) => {

    return (
        <div>
           <Login currentUser={currentUser}
                    setCurrentUser={setCurrentUser} /> 
        </div>
    )
}