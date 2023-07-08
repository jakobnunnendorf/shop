export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[];

export interface Database {
    public: {
        Tables: {
            addresses: {
                Row: {
                    address_id: string;
                    city: string | null;
                    country: string | null;
                    created_at: string | null;
                    house_number: string | null;
                    street: string | null;
                    type: string | null;
                    user_id: string;
                    zip_code: string | null;
                };
                Insert: {
                    address_id?: string;
                    city?: string | null;
                    country?: string | null;
                    created_at?: string | null;
                    house_number?: string | null;
                    street?: string | null;
                    type?: string | null;
                    user_id: string;
                    zip_code?: string | null;
                };
                Update: {
                    address_id?: string;
                    city?: string | null;
                    country?: string | null;
                    created_at?: string | null;
                    house_number?: string | null;
                    street?: string | null;
                    type?: string | null;
                    user_id?: string;
                    zip_code?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: 'addresses_user_id_fkey';
                        columns: ['user_id'];
                        referencedRelation: 'users';
                        referencedColumns: ['id'];
                    }
                ];
            };
            debugging: {
                Row: {
                    comment: string | null;
                    content_2: string | null;
                    content_3: string | null;
                    content_4: string | null;
                    created_at: string | null;
                    id: string;
                    message: string | null;
                    successful: boolean | null;
                    test_json: Json | null;
                };
                Insert: {
                    comment?: string | null;
                    content_2?: string | null;
                    content_3?: string | null;
                    content_4?: string | null;
                    created_at?: string | null;
                    id?: string;
                    message?: string | null;
                    successful?: boolean | null;
                    test_json?: Json | null;
                };
                Update: {
                    comment?: string | null;
                    content_2?: string | null;
                    content_3?: string | null;
                    content_4?: string | null;
                    created_at?: string | null;
                    id?: string;
                    message?: string | null;
                    successful?: boolean | null;
                    test_json?: Json | null;
                };
                Relationships: [];
            };
            orders: {
                Row: {
                    cart: Json[] | null;
                    created_at: string | null;
                    customer_details: Json | null;
                    order_id: string;
                    status: string | null;
                    user_id: string | null;
                };
                Insert: {
                    cart?: Json[] | null;
                    created_at?: string | null;
                    customer_details?: Json | null;
                    order_id?: string;
                    status?: string | null;
                    user_id?: string | null;
                };
                Update: {
                    cart?: Json[] | null;
                    created_at?: string | null;
                    customer_details?: Json | null;
                    order_id?: string;
                    status?: string | null;
                    user_id?: string | null;
                };
                Relationships: [];
            };
            products: {
                Row: {
                    category: string;
                    compatibleModels: string[] | null;
                    created_at: string;
                    description: string | null;
                    dimensions: Json | null;
                    id: string;
                    imageURL_array: string[];
                    price: number;
                    reviews: string[] | null;
                    stock: number;
                    title: string;
                };
                Insert: {
                    category: string;
                    compatibleModels?: string[] | null;
                    created_at?: string;
                    description?: string | null;
                    dimensions?: Json | null;
                    id?: string;
                    imageURL_array: string[];
                    price: number;
                    reviews?: string[] | null;
                    stock: number;
                    title: string;
                };
                Update: {
                    category?: string;
                    compatibleModels?: string[] | null;
                    created_at?: string;
                    description?: string | null;
                    dimensions?: Json | null;
                    id?: string;
                    imageURL_array?: string[];
                    price?: number;
                    reviews?: string[] | null;
                    stock?: number;
                    title?: string;
                };
                Relationships: [];
            };
            profiles: {
                Row: {
                    avatar_url: string | null;
                    billing: string | null;
                    created_at: string | null;
                    delivery: string | null;
                    email: string | null;
                    firstName: string | null;
                    lastName: string | null;
                    orders: string[] | null;
                    phone: string | null;
                    profile_id: string;
                    role: string | null;
                };
                Insert: {
                    avatar_url?: string | null;
                    billing?: string | null;
                    created_at?: string | null;
                    delivery?: string | null;
                    email?: string | null;
                    firstName?: string | null;
                    lastName?: string | null;
                    orders?: string[] | null;
                    phone?: string | null;
                    profile_id: string;
                    role?: string | null;
                };
                Update: {
                    avatar_url?: string | null;
                    billing?: string | null;
                    created_at?: string | null;
                    delivery?: string | null;
                    email?: string | null;
                    firstName?: string | null;
                    lastName?: string | null;
                    orders?: string[] | null;
                    phone?: string | null;
                    profile_id?: string;
                    role?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: 'profiles_billing_fkey';
                        columns: ['billing'];
                        referencedRelation: 'addresses';
                        referencedColumns: ['address_id'];
                    },
                    {
                        foreignKeyName: 'profiles_delivery_fkey';
                        columns: ['delivery'];
                        referencedRelation: 'addresses';
                        referencedColumns: ['address_id'];
                    },
                    {
                        foreignKeyName: 'profiles_profile_id_fkey';
                        columns: ['profile_id'];
                        referencedRelation: 'users';
                        referencedColumns: ['id'];
                    }
                ];
            };
            todos: {
                Row: {
                    created_at: string | null;
                    id: string | null;
                    todo: string | null;
                    user_id: string | null;
                };
                Insert: {
                    created_at?: string | null;
                    id?: string | null;
                    todo?: string | null;
                    user_id?: string | null;
                };
                Update: {
                    created_at?: string | null;
                    id?: string | null;
                    todo?: string | null;
                    user_id?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: 'todos_user_id_fkey';
                        columns: ['user_id'];
                        referencedRelation: 'users';
                        referencedColumns: ['id'];
                    }
                ];
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
}
