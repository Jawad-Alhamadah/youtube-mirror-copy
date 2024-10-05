import React from 'react'
import { SiYoutubeshorts } from "react-icons/si";
import { IoHomeOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { PiUserSquareLight } from "react-icons/pi";
import { LuListVideo } from "react-icons/lu";
import { GoClock } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { IoTrendingUpSharp } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { FaWifi } from "react-icons/fa6";
import { IoGameControllerOutline } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { FiFlag } from "react-icons/fi";
import { MdHelpOutline } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";




function SideBar(props) {
    
    
    return (
        <div 
        
        className={`z-[11] duration-500 space-y-6 p-5 bg-[#0f0f0f] w-[18em] fixed max-md:top-36 top-20 overflow-scroll max-h-[90vh] scroll-container  `}
        style={{left:props.hidden }}
        >
            <div className='space-y-2 grayhover'>
                <div className='flex items-center space-x-2 '> <IoHomeOutline /> <span>Home</span></div>
                <div className='flex items-center space-x-2 '><SiYoutubeshorts /><span>Shorts</span></div>
                <div className='flex items-center space-x-2 '> <MdOutlineSubscriptions />Subscriptions</div>

            </div>
            <hr className='border-gray-800' />
            <div  className='pace-y-2 grayhover'>
                <h1 className='text-2xl font-semibold '>You</h1>
                <div className='flex items-center space-x-2 '><GrChannel /><span>Your Channel </span>  </div>
                <div className='flex items-center space-x-2 '><MdHistory /><span>History</span>  </div>
                <div className='flex items-center space-x-2 '><LuListVideo /><span>Playlist</span>  </div>
                <div className='flex items-center space-x-2 '><PiUserSquareLight />  <span>Your vidoes</span>  </div>
                <div className='flex items-center space-x-2 '> <GoClock /><span>Watch later </span>  </div>
                <div className='flex items-center space-x-2 '><BiLike /><span>Liked videos </span>  </div>

            </div>
            <hr className='border-gray-800' />
            <div  className='pace-y-2 grayhover'>
                <h1 className='text-2xl font-semibold '>Subscriptions</h1>
                <div></div>
                <div></div>

            </div>
            <hr className='border-gray-800' />
            <div  className='pace-y-2 grayhover'>
                <h1 className='text-2xl font-semibold '>Exploring</h1>
                
                <div className='flex items-center space-x-2 '> <FaFireAlt /> <span>Trending</span></div>
                <div className='flex items-center space-x-2 '><IoMusicalNoteOutline /><span>Music</span></div>
                <div className='flex items-center space-x-2 '><FaWifi /> <span>Live</span></div>
                <div className='flex items-center space-x-2 '><IoGameControllerOutline /> <span>Gaming</span></div>
                <div className='flex items-center space-x-2 '><TfiCup /> <span>Sport</span></div>
            </div>
            <hr className='border-gray-800' />
            <div className='pace-y-2 grayhover'>
                <div className='flex items-center space-x-2 '><IoLogoYoutube className='text-[#ff0000]' /> <span>Youtube Premium</span></div>
                <div className='flex items-center space-x-2 '><TiSocialYoutubeCircular className='text-[#ff0000]' /> <span>Youtube Studio</span></div>
                <div className='flex items-center space-x-2 '><SiYoutubemusic className='text-[#ff0000]' /> <span>Youtube Music</span></div>
                <div className='flex items-center space-x-2 '><SiYoutubekids className='text-[#ff0000]' /> <span>Youtube Kids</span></div>
            </div>
            <div className='pace-y-2 grayhover'>
                <div className='flex items-center space-x-2 '><IoSettingsOutline /><span>Settings</span> </div>
                <div className='flex items-center space-x-2 '><FiFlag /><span>Report History</span> </div>
                <div className='flex items-center space-x-2 '><MdHelpOutline /><span>Help</span> </div>
                <div className='flex items-center space-x-2 '><MdOutlineFeedback /><span>Send Feedback</span> </div>
            </div>
            <div className='text-md text-[#515151]'>
                <div>
                    <div>
                        AboutPressCopyrightContact usCreatorAdvertiseDevelopers
                    </div>
                    <div>
                        TermsPrivacyPolicy & SafetyHow YouTube worksTest new features
                    </div>
                    <div>
                        © 2024 Google LLC
                    </div>


                </div>
            </div>
        </div>
    )
}

export default SideBar
