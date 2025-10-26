import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

export default function About() {
    return (
        <div className="bg-[#d5ffff] text-center">
            <h1 className='font-semibold pt-10
            text-[28px]'>Why Choose ConsultCorp</h1> 
            <p className='text-[18px]'>We deliver exceptional value through our unique approach to business consulting</p>

            <div className="flex gap-4 py-15
            md:flex-row
            sm:mx-[80px] 
            flex-col mx-[20px]">
                <div className="about-card bg-white space-y-2 py-5 rounded shadow-[0px_2px_2px_0px]">
                    <LightbulbOutlinedIcon fontSize="large" />
                    <h2 className="text-[24px] font-semibold">Innovative Solutions</h2>
                    <p className='text-[18px] mx-[8px]'>We develop creative, forward-thinking strategies that help your business stay ahead of industry trends and competition.</p>
                </div>
                
                <div className="about-card bg-white space-y-2 py-5 rounded shadow-[0px_2px_2px_0px]">
                    <BarChartOutlinedIcon fontSize="large" />
                    <h2 className="text-[24px] font-semibold">Data-Driven Strategies</h2>
                    <p className='text-[18px] mx-[8px]'>Our recommendations are backed by comprehensive research, analytics, and industry benchmarks for measureable outcomes.</p>
                </div>

                <div className="about-card bg-white space-y-2 py-5 rounded shadow-[0px_2px_2px_0px]">
                    <GroupOutlinedIcon fontSize="large" />
                    <h2 className="text-[24px] font-semibold">Expert Team</h2>
                    <p className='text-[18px] mx-[8px]'>Our consultant brings decades of industry experience and specialized knowledge to solve your most complex business challenges.</p>
                </div>
            </div>
            
        </div>
    );
}