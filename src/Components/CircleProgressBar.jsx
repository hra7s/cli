import React from 'react'

const CircleProgressBar = () => {
  return (
    <div className='text-center'>
        <div className="row d-flex justify-content-center">
           <div className="col-md-6">
               <div className="progress blue">
                 <span className="progress-left">
                                   <span className="progress-bar"></span>
                 </span>
                 <span className="progress-right">
                                   <span className="progress-bar"></span>
                 </span>
                 <div className="progress-value">93%</div>
               </div>
                 <div className="progress blue">
                   <span className="progress-left">
                                   <span className="progress-bar"></span>
                   </span>
                   <span className="progress-right">
                                   <span className="progress-bar"></span>
                   </span>
                   <div className="progress-value">94%</div>
                 </div>  
           </div>   
       </div>
    </div>
  )
}

export default CircleProgressBar