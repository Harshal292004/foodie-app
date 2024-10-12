import React from 'react'

const Badge = ({value}) => {
  return (
    <>
        <div class="relative inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-none rounded-full -top-[11px] end-[8px] ">{value}</div>
    </>
  )
}

export default Badge
