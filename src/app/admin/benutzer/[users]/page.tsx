
import UserInfoPanel from "@app/user/profile/UserInfoPanel";
export default function UserView({
    params, 
}: 
{
    params: {params: string},
}) {

    return (
        <div className='flex h-fit flex-col items-center justify-center space-y-8 bg-grey'>
            <UserInfoPanel user_id={params.users}/>
        </div>
    );
}