
import UserInfoPanel from "@app/user/profile/UserInfoPanel";
export default function UserView({
    params, 
}: {
    params: { params: string },
}) {

    return (
        <div className='flex items-center justify-center lg:flex-row md:flex-col bg-grey'>
            <UserInfoPanel user_id={params.users}/>
        </div>
    );
}