import UserInfoPanel from '@app/user/profile/UserInfoPanel';
export default function UserView({ params }: { params: { params: string } }) {
    return (
        <div className='bg-grey flex h-fit flex-col items-center justify-center space-y-8'>
            <UserInfoPanel user_id={params.users} />
        </div>
    );
}
