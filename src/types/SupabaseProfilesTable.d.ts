type ProfilesFetchData = Profile[] | Profile | null;

interface Profile {
    profileId: UUID;
    createdAt: CreatedAt;
    role: Role;
    firstName: string | null;
    avatarURL: BucketURL<'profilePictures'>;
    lastName: string | null;
    email: Email;
    phone: string | null;
    delivery: Address | null;
    billing: Address | null;
    orders: UUID[];
    customerDetails: UUID | null;
}

type Role = 'admin' | 'customer';
