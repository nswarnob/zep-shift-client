import React from 'react'

const Satisfiction = () => {
  return (
 <div className="w-full bg-[#022B2F] rounded-2xl p-8 text-white max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
{/* Text Section */}
<div className="space-y-3 max-w-xl">
<h2 className="text-2xl font-semibold">
Merchant and Customer Satisfaction is Our First Priority
</h2>
<p className="text-sm opacity-80">
We offer the lowest delivery charges with the highest value, along with 85% weekly
or personal instant revenue delivered to your account on time.
</p>


<div className="flex gap-3 flex-wrap pt-2">
<button className="bg-[#00C18C] text-black px-5 py-2 rounded-full text-sm">
Become a Merchant
</button>
<button className="border border-[#00C18C] text-[#00C18C] px-5 py-2 rounded-full text-sm">
Earn with ZagZagHIT Courier
</button>
</div>
</div>


{/* Simple Illustration */}
<div className="flex justify-center items-center opacity-70">
<svg
width="200"
height="120"
viewBox="0 0 200 120"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<rect x="20" y="50" width="80" height="50" rx="6" stroke="white" />
<rect x="70" y="30" width="80" height="50" rx="6" stroke="white" />
<circle cx="150" cy="20" r="6" stroke="white" />
<path d="M140 25 C150 40 170 40 180 25" stroke="white" />
</svg>
</div>
</div>
  )
}

export default Satisfiction