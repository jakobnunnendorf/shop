import Greeting from '@app/user/Profile/Greeting';
import UserInfoPanel from '@app/user/Profile/UserInfoPanel/UserInfoPanel';

type params = {
    params: {
        userId: string;
    };
};
export default function UserView({ params: { userId } }: params) {
    return (
        <div className='flex flex-col items-center justify-center bg-grey '>
            <Greeting profileId={userId as UUID} />
            <UserInfoPanel userId={userId as UUID} />
        </div>
    );
}
