import profile from "../img/proflie.jpg"
import facebook from "../img/facebook.png"
import instagram from "../img/instagram.png"
import github from "../img/github.png"
function Page() {
    return(
    <div className="grid grid-rows-[25%_62%_13%] w-screen h-screen">
        {/* header */}
        <div className="grid grid-cols-[50%_50%] justify-center items-center bg-[#d9c9ae]">
            <div className="flex flex-row justify-end items-center pr-10">
            <img src={profile} className="w-[200px] h-[200px] rounded-full"/></div>
            <div className="pl-14">
                <div className="text-[20px]">FULL-STACK DEVELOPER</div>
                <div className="text-[48px] font-bold">PAKORN<br></br>SEMAPONGPUN</div>
            </div>
        </div>
        {/* main */}
        <div className="grid grid-cols-[50%_50%]">
            <div className="grid grid-row-[30%_40%_30%] justify-end pt-1 pr-14">
                <div>
                    <div className="text-[24px] font-bold text-[#9E8C6C]">ABOUT</div>
                    <div>
                        <p className="font-bold">Date of Birth</p> 15 April 2001
                        <p className="font-bold">Age</p> 22 years old
                        <p className="font-bold">Address</p>
                        <p>Bang Khae, Bangkok</p>
                    </div>
                </div>
                <div>
                    <div className="text-[24px] font-bold text-[#9E8C6C]">SKILLS</div>
                    <ul>
                        <li className="text-[18px]">- Git</li>
                        <li className="text-[18px]">- HTML</li>
                        <li className="text-[18px]">- CSS</li>
                        <li className="text-[18px]">- Tailwind</li>
                        <li className="text-[18px]">- JavaScript</li>
                        <li className="text-[18px]">- React</li>
                        <li className="text-[18px]">- MongoDB</li>
                        <li className="text-[18px]">- PostgreSQL</li>
                    </ul>
                </div>
                <div>
                    <div className="text-[24px] font-bold text-[#9E8C6C]">HOBBIES</div>
                    <ul>
                        <li className="text-[18px]">- Playing Games</li>
                        <li className="text-[18px]">- Listening to music</li>
                        <li className="text-[18px]">- Cooking</li>
                        <li className="text-[18px]">- Driving</li>
                    </ul>
                </div>
            </div>    
            <div className="grid grid-row-[30%_40%_30%] pt-1 pl-14">
                <div>
                    <div className="text-[24px] font-bold text-[#9E8C6C]">EXPERIENCE</div>
                    <div className="text-[22px]">Electronic Transactions Development Agency (ETDA)</div>
                    <div className="text-[20px]">Project Manager Trainee</div>
                    <div className="text-[18px]">- Survey of citizens needs for electronic services using Digital ID</div>
                </div>
                <div>
                    <div className="text-[24px] font-bold text-[#9E8C6C]">ACTIVITY</div>
                    <ul>
                        <li className="text-[18px]">- Cheerleader of Major Management</li>
                        <li className="text-[18px]">- BBS Open House 2019-2020</li>
                        <li className="text-[18px]">- Volunteer Bangsaen21 2019</li>
                        <li className="text-[18px]">- Volunteer Bangsaen42 2019</li>
                        <li className="text-[18px]">- Volunteer Bangsaen42 2020</li>
                        <li className="text-[18px]">- The Stock Master @University 2021</li>
                    </ul>
                </div>
                <div>
                    <div className="text-[24px] font-bold text-[#9E8C6C]">EDUCATION</div>
                    <div className="text-[22px]">Burapha University</div>
                    <div className="text-[20px]">Burapha Business School</div>
                    <div className="text-[18px]">Major Business Management and Innovation</div>
                </div>
            </div>
        </div>
        {/* footer */}
        <div className="flex flex-col justify-center items-center bg-[#d9c9ae]">
            <p className="font-bold">CONTACT ME</p>
            <p className="text-[#0699A6] pb-1">pakorn.smpp@gmail.com</p><p className="text-[#0699A6] pb-1">095-254-4541</p>
            <div className="flex flex-rows justify-center items-center">
                <img src={facebook} className="w-[25px] h-[25px] hover:scale-110 hover:transition-all"></img>
                <img src={instagram} className="w-[25px] h-[25px] hover:scale-110 hover:transition-all mr-5 ml-5"></img>
                <img src={github} className="w-[25px] h-[25px] hover:scale-110 hover:transition-all bg-[#0699A6]"></img>
            </div>
        </div>
    </div>
        )
}

export default Page