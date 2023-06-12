export default function AdminDashboard() {
    const AdminDashboardContent = (
        <div className="flex flex-col items-center w-full space-y-8">
            <h1 className="w-full text-4xl text-center">Admin Dashboard</h1>
            <div className="grid grid-cols-2 grid-rows-2 gap-8 w-fit">
                <div className="flex items-center justify-center h-48 border-2 w-80 rounded-3xl">Kunden</div>
                <div className="flex items-center justify-center h-48 border-2 w-80 rounded-3xl">Produkte</div>
                <div className="flex items-center justify-center h-48 border-2 w-80 rounded-3xl">Bestellungen</div>
                <div className="flex items-center justify-center h-48 border-2 w-80 rounded-3xl">Einstellungen</div>
            </div>
        </div>
    )
    return AdminDashboardContent
}
