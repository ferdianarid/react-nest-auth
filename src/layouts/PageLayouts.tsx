import React from 'react'

const PageLayouts = ({ children }: any) => {
   return (
      <React.Fragment>
         <div className="px-[100px] mt-5">
            {children}
         </div>
      </React.Fragment>
   )
}

export default PageLayouts