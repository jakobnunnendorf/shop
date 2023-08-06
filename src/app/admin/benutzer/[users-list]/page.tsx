
import UserInfoPanel from '@app/user/profile/UserInfoPanel';

export default function UserInfoByID( {user}: {user?: string | undefined } ) {    

    return (
        <div className="flex h-fit flex-col items-center justify-center space-y-8">
            <UserInfoPanel user_id={user}/>
        </div>
    );
};
