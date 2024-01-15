import { kickOutIfNotLoggedInAsAdmin } from '@lib/handleUserData';
import AdminDashboard from './AdminDashboard/AdminDashboard';

export default async function AdminPage() {
    await kickOutIfNotLoggedInAsAdmin();

    return <AdminDashboard />;
}
