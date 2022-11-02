import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { loadWeb3 } from '../../apis/api';
import {  financeAppContractAddress, financeAppContract_Abi } from '../../utilies/Contract';
import './My_team.css'
import RepetationComponent from './RepetationComponent';
import img1 from './tm1.png'
import img2 from './tm2.png'
import img3 from './tm3.png'
import img4 from './tm4.png'

function My_team() {
    const [userinfos, setUserInfos] = useState('')

    const getDetail = async () => {
        let acc = await loadWeb3();
        if (acc == "No Wallet") {
            // toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            // toast.error("Wrong Newtwork please connect to Polygon Mainnet ")
        } else {
            try {
                let obj = {};
                const web3 = window.web3;
                let financeAppcontractOf = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress);
 

                let getTeamDeposit = await financeAppcontractOf.methods.getTeamDeposit(acc).call();
                let checkMaxDeposit = await financeAppcontractOf.methods.checkMaxDeposit(acc).call();
                let check_Address=checkMaxDeposit.addr
              

                checkMaxDeposit=web3.utils.fromWei(checkMaxDeposit.amount)
                let sales = web3.utils.fromWei(getTeamDeposit[2])
                let PerformanceAarea = web3.utils.fromWei(getTeamDeposit[0])
                let PerformanceBarea = web3.utils.fromWei(getTeamDeposit[1])
                let getOrderLength = await financeAppcontractOf.methods.userInfo(acc).call();
                obj['sale'] = sales
                obj['PerformanceAarea'] = PerformanceAarea
                obj['PerformanceBarea'] = PerformanceBarea
                obj['orderLength'] = getOrderLength.teamNum
                obj['checkMaxDeposit'] = checkMaxDeposit
                obj['Leval_Data'] = getOrderLength.level
                obj['check_Address'] = check_Address


                setUserInfos(obj)
            } catch (e) {
                toast.error(e.message);
            }
        }
    }
    useEffect(() => {
        getDetail()
    }, []);

    return (
        <div className='mmmmm'>
            <h3 className='text-white mt-5 mb-3'>My Team</h3>
            <RepetationComponent />


            <div className="My_team_second_section">
                <div className="team_main">
                    <div className="team_dev">
                        <div className="sale_main">
                            <img src={img1} alt="" />
                            <div className="team_p text-white ">
                                <span>sales</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>{userinfos.sale}</span>
                            </div>
                        </div>
                        <div className="sale_main">
                            <img src={img2} alt="" />
                            <div className="team_p text-white ">
                                <span>Downline</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>{userinfos.orderLength}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team_main2">
                    <div className="team_dev">
                        <div className="sale_main">
                            <img src={img3} alt="" />
                            <div className="team_p text-white ">
                                <span>Performance A area</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>{userinfos.PerformanceAarea}</span>
                            </div>
                        </div>
                        <div className="sale_main">
                            <img src={img4} alt="" />
                            <div className="team_p text-white ">
                                <span>Performance B area</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>{userinfos.PerformanceBarea}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="team_main2">
                    {/* <div className="Last_div_img"> */}
                        <div className="Last_div_img">
                            <img src={img3} alt="" />
                            <div className="team_p text-white ">
                                <span>Maximum Team Deposit-Level</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>{userinfos.checkMaxDeposit} - {userinfos.Leval_Data}
                                 {/* - {userinfos.check_Address} */}
                                  </span>
                            </div>
                        </div>
                        
                    {/* </div> */}
                </div>

            </div>


        </div>
    )
}
export default My_team