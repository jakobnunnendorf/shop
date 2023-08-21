
import UserInfoPanel from '@app/user/profile/UserInfoPanel';

type params = {
    params: {
        userID: string;
    };
};
export default function UserView({ params: { userID } }: params) {
    return (
        <div className='bg-grey flex items-center justify-center md:flex-col lg:flex-row'>
            <UserInfoPanel user_id={userID} />
        </div>
    );
}