import profile from "../img/proflie.jpg"
function Page() {
    return(
    <div className="grid grid-rows-[30%_60%_10%] w-screen h-screen">
        {/* header */}
        <div className="grid grid-cols-[40%_60%] justify-center items-center bg-[#d9c9ae]">
            <div className="flex flex-row justify-center items-center">
            <img src={profile} className="w-[250px] h-[250px] rounded-full"/></div>
            <div>
                <div className="text-[20px]">FULL-STACK DEVELOPER</div>
                <div className="text-[48px] font-bold">PAKORN<br></br>SEMAPONGPUN</div>
            </div>
        </div>
        {/* main */}
        <div className="grid grid-cols-[40%_60%]">
            <div className="grid grid-row-[30%_40%_30%] justify-center pt-3">
                <div>
                    <div className="text-[24px] font-bold text-[#9E8C6C]">ABOUT</div>
                    <div>
                        Date of Birth 15 April 2001 <br></br>
                        Age 22 years old
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
            <div className="grid grid-row-[30%_40%_30%] pt-3">
                <div>
                    <div className="text-[24px] font-bold text-[#9E8C6C]">EXPERIENCE</div>
                    <div className="text-[20px]">Ban Saen Suk Cafe Chonburi</div>
                    <div className="text-[18px]">Barista</div>
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
            <div className="font-bold">CONTACT ME</div>
            <div className="text-[#0699A6] pb-2">pakorn.smpp@gmail.com</div>
            <div className="flex flex-rows justify-center items-center">
                <img src="./src/img/facebook.png" className="w-[25px] h-[25px] hover:scale-110 hover:transition-all"></img>
                <img src="./src/img/instagram.png" className="w-[25px] h-[25px] hover:scale-110 hover:transition-all mr-5 ml-5"></img>
                <img src="./src/img/github.png" className="w-[25px] h-[25px] hover:scale-110 hover:transition-all bg-[#0699A6]"></img>
            </div>
        </div>
    </div>
        )
}

export default Page