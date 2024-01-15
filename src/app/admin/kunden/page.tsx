import CustomerList from './CustomerList/CustomerList';

export default function AdminDashboardUsersList() {
    const adminDashboardUsersList = (
        <div>
            <h1 className='text-3xl font-bold'>Kundenliste</h1>
            <CustomerList />
        </div>
    );
    return adminDashboardUsersList;
}
