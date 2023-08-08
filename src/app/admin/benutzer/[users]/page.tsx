
import UserInfoPanel from "@app/user/profile/UserInfoPanel"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function ViewUser({
    user_profile
}: {
    user_profile: profile 
}) {
    
    return (
        <div>
            <UserInfoPanel user_id={user_profile.profile_id} />
        </div>
    );
};
