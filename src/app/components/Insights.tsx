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
                    <h1 className='insight-head font-semibold pt-10  text-center
                    text-[28px]'>Powerful functionality and data visualization tools</h1> 
                    <p className='insight-text text-center 
                    text-[18px]
                    md:px-[25%]
                    sm:px-[12%]
                    px-[10%]'>Uncover powerful insighs with ease - streamline your decisions with robust features and dynamic visualizations.</p>
        
                    <div className="grid gap-3 flex-wrap text-white px-[4%] mt-8 mb-20
                    md:grid-cols-4 
                    sm:grid-cols-2 ">
                        <div className="insight-box bg-blue-900 px-10 py-6 space-y-4 hover:bg-blue-600 cursor-pointer rounded-[10px]">
                            <StorageIcon fontSize='large'/>
                            <h3 className="insight-box-head text-[18px]">Access to multiple Moody’s proprietary data types</h3>
                        </div>
                        
                        <div className="insight-box bg-blue-900 px-10 py-6 space-y-4 hover:bg-blue-600 cursor-pointer rounded-[10px]">
                            <NotificationsActiveIcon fontSize='large'/>
                            <h3 className="insight-box-head text-[18px]">Powerful flexible data change and news alerts for monitoring</h3>
                        </div>
                        
                        <div className="insight-box bg-blue-900 px-10 py-6 space-y-4 hover:bg-blue-600 cursor-pointer rounded-[10px]">
                            <InsertDriveFileIcon fontSize='large'/>
                            <h3 className="insight-box-head text-[18px]">Add-ins populate Microsoft Office templates with live data from Orbis</h3>
                        </div>
                        
                        <div className="insight-box bg-blue-900 px-10 py-6 space-y-4 hover:bg-blue-600 cursor-pointer rounded-[10px]">
                            <SearchIcon fontSize='large'/>
                            <h3 className="insight-box-head text-[18px]">100s of search criteria so you can find companies with very precise profiles</h3>
                        </div>

                        <div className="insight-box bg-blue-900 px-10 py-6 space-y-4 hover:bg-blue-600 cursor-pointer rounded-[10px]">
                            <PivotTableChartIcon fontSize='large'/>
                            <h3 className="insight-box-head text-[18px]">Pivot analyses</h3>
                        </div>
                        <div className="insight-box bg-blue-900 px-10 py-6 space-y-4 hover:bg-blue-600 cursor-pointer rounded-[10px]">
                            <AccountBoxIcon fontSize='large'/>      
                            <h3 className="insight-box-head text-[18px]">Ownership explorer</h3>
                        </div>
                        <div className="insight-box bg-blue-900 px-10 py-6 space-y-4 hover:bg-blue-600 cursor-pointer rounded-[10px]">
                            <DescriptionIcon fontSize='large'/>
                            <h3 className="insight-box-head text-[18px]">Flexible report ordering</h3>
                        </div>
                        <div className="insight-box bg-blue-900 px-10 py-6 space-y-4 hover:bg-blue-600 cursor-pointer rounded-[10px]">
                            <BarChartIcon fontSize='large'/>
                            <h3 className="insight-box-head text-[18px]">Heat maps and graphs</h3>
                        </div>
                        
                    </div>
                    
                </div>
    );
}