import React from 'react'

export  function SmImgOverlay() {
  return (
    <div className="position-relative smallImgBox">
        
        <img src="https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className='img-sm'/>
        
        <div class="bottom-left-small">
            <h5 className='m-0'>The Sound cloud</h5>
            <h5>You loved is doomed</h5>
            <p className='grey-text'>Travel / August 21 2017</p>
        </div>
    </div>
  )
}
const LgImgOverlay = () => {
  return (
    <div className="position-relative largeImgBox">
         
        <img src="https://mymodernmet.com/wp/wp-content/uploads/2021/04/Nature-Sounds-For-Well-Being-01.jpg" alt="" className='img-lg'/>
       
        <div class="bottom-left">
           <h3>Title of vertical </h3>
           <p className='text-grey'>Travel / August 21 2017</p>
        </div>
    </div>
  )
}
export default LgImgOverlay