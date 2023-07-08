type profilesFetchData = profile[] | profile | null;

interface profile {
    profile_id: UUID;
    created_at: created_at;
    role: role;
    firstName: string | null;
    avatar_url: bucketURL<'profile_pictures'>;
    lastName: string | null;
    email: email;
    phone: string | null;
    delivery: UUID | null;
    billing: UUID | null;
    orders: UUID[];
    customer_details: UUID | null;
}

type role = 'admin' | 'customer';
