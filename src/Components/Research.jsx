// import React from 'react'
// import CircleProgressBar from './CircleProgressBar'

// const Research = () => {
//   return (
//     <div className='text-center'>
//         <h4 className='text-center'>Research</h4>
//         <CircleProgressBar />
//     </div>
//   )
// }

// export default Research

import  { useEffect, useState } from 'react';


const Research = () => {
    const [progress1, setProgress1] = useState(0);
    const [progress2, setProgress2] = useState(0);

    useEffect(() => {
        // Increment progress values with animation
        const timer1 = setInterval(() => {
            setProgress1((prev) => (prev < 93 ? prev + 1 : prev));
        }, 20);

        const timer2 = setInterval(() => {
            setProgress2((prev) => (prev < 94 ? prev + 1 : prev));
        }, 20);

        // Cleanup intervals when animation completes
        return () => {
            clearInterval(timer1);
            clearInterval(timer2);
        };
    }, []);

    return (
        <section className="research">
            <h2>Research</h2>
            <div className="progress-circles">
                <div className="circle-container">
                    <svg className="progress-circle" viewBox="0 0 36 36">
                        <path
                            className="circle-bg"
                            d="M18 2.0845
                               a 15.9155 15.9155 0 0 1 0 31.831
                               a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                            className="circle"
                            strokeDasharray={`${progress1}, 100`}
                            d="M18 2.0845
                               a 15.9155 15.9155 0 0 1 0 31.831
                               a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        {/* Arrow Path */}
                        <path
                            className="arrow"
                            d="M18 2.0845
                               a 15.9155 15.9155 0 0 1 0 31.831
                               a 15.9155 15.9155 0 0 1 0 -31.831"
                            strokeDasharray="100"
                            strokeDashoffset={`${100 - progress1}`}
                        />
                    </svg>
                    <div className="circle-text">{progress1}%</div>
                </div>

                <div className="circle-container">
                    <svg className="progress-circle" viewBox="0 0 36 36">
                        <path
                            className="circle-bg"
                            d="M18 2.0845
                               a 15.9155 15.9155 0 0 1 0 31.831
                               a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                            className="circle"
                            strokeDasharray={`${progress2}, 100`}
                            d="M18 2.0845
                               a 15.9155 15.9155 0 0 1 0 31.831
                               a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        {/* Arrow Path */}
                        <path
                            className="arrow"
                            d="M18 2.0845
                               a 15.9155 15.9155 0 0 1 0 31.831
                               a 15.9155 15.9155 0 0 1 0 -31.831"
                            strokeDasharray="100"
                            strokeDashoffset={`${100 - progress2}`}
                        />
                    </svg>
                    <div className="circle-text">{progress2}%</div>
                </div>
            </div>
        </section>
    );
};

export default Research;
