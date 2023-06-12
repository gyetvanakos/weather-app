import React from 'react'

export default function Degree({ temp }: { temp: number }) {
  return <>
  <span>
    {temp}
    <sup>o</sup>
  </span>
</>
}
