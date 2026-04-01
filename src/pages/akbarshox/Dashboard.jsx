import React from 'react';
import { BiDollar } from 'react-icons/bi';
import { FaArrowDown, FaArrowUp, FaShoppingCart } from 'react-icons/fa';
import { FaPeopleRoof } from 'react-icons/fa6';
import { IoIosArrowDown, IoIosColorFill, IoIosMan } from 'react-icons/io';
import './Dashboard.css';
import { LineChart } from '@mui/x-charts';
import chart from '../../assets/chart.png';
import { shoping } from '../../data/Akbarshox';
const Dashboard = () => {
  return (
    <div>
        <strong>Dashboard</strong>

      <div style={{borderColor:'black'}} className='dashboard-rep'>
        <div className='fist-part'>
            <div>
            <strong >$10.540</strong>
            <p>Total Revenue</p>
            <p style={{color:'green'}}>22.45% </p>
            </div>

            <p style={{color:'green'}}><FaArrowUp /></p>
            <button className='btn' style={{color:'blue'}}><BiDollar  /></button>

        </div>
        <div className='second-part'>

            <div>
            <strong>1,056</strong>
            <p>Orders</p>
            <p style={{color:'green'}}>15.34% </p>
            </div>

            <p style={{color:'green'}}><FaArrowUp /></p>
            <button  className='btn' style={{color:'blue'}}><FaShoppingCart /></button>
        </div>
        <div className='third-part'>

            <div>
            <strong>48</strong>
            <p>Active Sessions</p>
            <p style={{color:'red'}}>18.25% </p>
            </div>

            <p style={{color:'red'}}><FaArrowDown /></p>
            <button className='btn' style={{color:'blue'}}><IoIosMan /></button>
        </div>

        <div className='fourth-part'>

            <div >
            <strong>5.420</strong>
            <p>Total Sessions</p>
            <p style={{color:'red'}}>10.24% </p>
            </div>

            <p style={{color:'red'}}><FaArrowDown /></p>
            <button className='btn' style={{color:'blue'}}><FaPeopleRoof /></button>
        </div>
      </div>
<div className='dash-menu'> 
    
            <div className='dash-chart'>
                <div className='dash-chart-info'>
                    <strong>Orders Over Time</strong>
                    <div className='chart-arrow'>
                    <h4>Last 12 Hours</h4>
                    <p><IoIosArrowDown /></p>
                </div>
                    </div>
                <div className='dash-cart-info2'>   
                    <div>
                    <strong>645</strong>
                    <p>Orders on May 22</p>

                    <strong>472</strong>
                    <p>Orders on May 21</p>
                    </div>
                    <div>
                        <h3> <IoIosColorFill />May 21</h3>
                        <h3><IoIosColorFill />May 22</h3>
                    </div>


                </div>



                <div className='chart'>
                        <LineChart
xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
series={[
    {
        data: [2, 5.5, 2, 8.5, 1.5, 5],
    },
]}
height={200}
width={700}
/>
</div>
</div>

    <div className='dash-last-days'>
        <div>Last 7 Days Sales</div>
        <div className='dash-last-days-text'> 
            <strong>1,259</strong>
            <p>Items Sold</p>
        <div>
        <strong>$12,546</strong>
        <p>Revenue</p>
        </div>
        </div>
            <img style={{marginTop:'25px'}} src={chart} alt="" />
    </div>

</div>

    <div>
        <strong>Top Products by Units Sold</strong>
        <div className='cardes'>

        {shoping.map((item,index) => (
            <div className='carts'  key={index}>
                <img src={item.img} alt="" />
                <strong>{item.name}</strong>
                <p>{item.price}</p>
                <p>{item.soid}</p>
            </div>
        )
    )}
    </div>
    </div>


    </div>
  );
}

export default Dashboard;
