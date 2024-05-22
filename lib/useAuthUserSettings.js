import { useSession } from 'next-auth/react';

const useAuthUserSettings = () => {
    const { data: AuthUserData, status } = useSession();

    const isLoading = status === 'loading';

    return { AuthUserData, isLoading };
};

export default useAuthUserSettings;
