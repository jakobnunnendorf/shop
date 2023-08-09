
import UserInfoPanel from "@app/user/profile/UserInfoPanel";
export default function UserView({
    params, 
}: {
    params: { params: string },
}) {

    return (
        <div className='flex lg:flex-row md:flex-col items-center justify-center bg-grey'>
            <UserInfoPanel user_id={params.users}/>
        </div>
    );
}