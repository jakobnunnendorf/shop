import UserInfoPanel from '@app/user/profile/UserInfoPanel';
export default function UserView({ params }: { params: { params: string } }) {
    return (
        <div className='bg-grey flex items-center justify-center md:flex-col lg:flex-row'>
            <UserInfoPanel user_id={params.users} />
        </div>
    );
}
