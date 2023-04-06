import React from 'react'

import vintage1 from '../img/vintage1 .png'
import vintage2 from '../img/vintage2 .png'
import vintage3 from '../img/vintage3 .png'
import vintage4 from '../img/vintage4.png'
import vintage5 from '../img/vintage5.png'

const Story = () => {
    return (
        <>
            <div className="story" id="story">
                <div className="item1">
                    Our-<span style={{ color: "#FF9900" }}>Story</span>

                </div>
                <div className="item2">
                    <span className='storycard'><img src={vintage1} alt="" width="100%" />
                    <h3 >Passionate</h3>
                    <span >Our concepts are crafted by passion in every single detail, designing lasting moments.</span>
                    
                    </span>

                </div>
                <div className="item3">
                    <h3 className='text-center'>Distinct</h3>
                    <p className='text-center'>We deliver unique experiences in distinctive and elegant settings, ensuring that each visit is as memorable as the last.</p>
                    <span><img src={vintage2} alt="" width="100%" /></span>

                </div>
                <div className="item4">
                    <span className='storycard'><img src={vintage3} alt="" width="100%" />
                    <h3>World class</h3>
                    <span>Our collection consists of award - winning restaurants situated in premium dining destinations.</span>
                    </span>

                </div>
                <div className="item5">
                    <span className='storycard'><img src={vintage4} alt="" width="100%" /></span>

                </div>
                <div className="item6">
                    <span className='storycard'><img src={vintage5} alt="" width="100%" /></span>

                </div>
                <div className="item7">


                </div>


            </div>

        </>
    )
}

export default Story