import Navbar from "../../vendor/layout/navbar";
import Sidebar from "../../vendor/layout/sidebar"; 

function AdminLayout({ children }) {
    return (  
        <div>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                <div className='flex-1'>{ children }</div>
            </div>
        </div>
    );
}

export default AdminLayout;