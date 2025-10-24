import StorageIcon from '@mui/icons-material/Storage';
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import BarChartIcon from '@mui/icons-material/BarChart';
import PivotTableChartIcon from '@mui/icons-material/PivotTableChart';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DescriptionIcon from '@mui/icons-material/Description';


export default function Insights() {
    return (
        <div className="bg-white">
                    <h1 className='font-semibold pt-10  text-center
                    sm:text-[28px] 
                    text-[20px]'>Powerful functionality and data visualization tools</h1>
                    <p className='text-center 
                    md:px-[28%]
                    sm:px-[12%]
                    px-[10%]'>Uncover powerful insighs with ease - streamline your decisions with robust features and dynamic visualizations.</p>
        
                    <div className="grid gap-3 flex-wrap text-white px-[4%] mt-8 mb-20
                    md:grid-cols-4 
                    sm:grid-cols-2 ">
                        <div className="bg-blue-900 px-10 py-6 space-y-4 hover:bg-blue-600 cursor-pointer">
                            <StorageIcon fontSize='large'/>
                            <h3 className="">Access to multiple Moody’s proprietary data types</h3>
                        </div>
                        <div className="bg-blue-900 px-10 py-6 space-y-4 hover:bg-blue-600 cursor-pointer">
                            <SearchIcon fontSize='large'/>
                            <h3 className="">100s of search criteria so you can find companies with very precise profiles</h3>
                        </div>
                        <div className="bg-blue-900 px-10 py-6 space-y-4 hover:bg-blue-600 cursor-pointer">
                            <AccountBoxIcon fontSize='large'/>      
                            <h3 className="">Ownership explorer</h3>
                        </div>
                        <div className="bg-blue-900 px-10 py-6 space-y-4 hover:bg-blue-600 cursor-pointer">
                            <NotificationsActiveIcon fontSize='large'/>
                            <h3 className="">Powerful flexible data change and news alerts for monitoring</h3>
                        </div>
                        <div className="bg-blue-900 px-10 py-6 space-y-4 hover:bg-blue-600 cursor-pointer">
                            <BarChartIcon fontSize='large'/>
                            <h3 className="">Heat maps and graphs</h3>
                        </div>
                        <div className="bg-blue-900 px-10 py-6 space-y-4 hover:bg-blue-600 cursor-pointer">
                            <PivotTableChartIcon fontSize='large'/>
                            <h3 className="">Pivot analyses</h3>
                        </div>
                        <div className="bg-blue-900 px-10 py-6 space-y-4 hover:bg-blue-600 cursor-pointer">
                            <InsertDriveFileIcon fontSize='large'/>
                            <h3 className="">Add-ins populate Microsoft Office templates with live data from Orbis</h3>
                        </div>
                        <div className="bg-blue-900 px-10 py-6 space-y-4 hover:bg-blue-600 cursor-pointer">
                            <DescriptionIcon fontSize='large'/>
                            <h3 className="">Flexible report ordering</h3>
                        </div>
                    </div>
                    
                </div>
    );
}