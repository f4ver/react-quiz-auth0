import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <article className='column'>
                {user?.picture && <img class = "picImg" src={user.picture} alt={user?.name} />}
                <h2>{user?.given_name+' '+user?.family_name}</h2>
                <h2>{user?.nickname}</h2>
            </article>
        )
    )
}

export default Profile
