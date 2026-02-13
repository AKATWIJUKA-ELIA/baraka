import React from 'react'
import { Oval } from 'react-loader-spinner'

const loader = () => {
  return (
     <div className="flex  opacity-95 w-[100%] h-[100%] items-center justify-center animate-pulse">
                            <div className="flex"><h1 className='text-sm md:text-2xl text-dark  '>Baraka H</h1></div>
                            <div className="flex">
                                    <Oval
                                            visible={true}
                                            height="30"
                                            width="30"
                                            color="#f71f14"
                                            secondaryColor="#46c1ee"
                                            ariaLabel="oval-loading"
                                            />
                            </div>
                                            <div className="flex text-sm md:text-2xl text-dark  "><span className="text-gold">tel</span>.  .  .</div>
                                    </div>
  )
}

export default loader