import { useSession } from 'next-auth/react'

const useAuthUserSettings = () => {
    const { data: AuthUserData } = useSession()

    return { AuthUserData };
};

export default useAuthUserSettings;