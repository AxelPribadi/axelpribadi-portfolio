import type { SVGProps } from 'react'

export default function Sun(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <g className="sun-rays">
        <rect x="10.5" y="1" width="3" height="4" rx="1.5" transform="rotate(0   12 12)" />
        <rect x="10.5" y="1" width="3" height="4" rx="1.5" transform="rotate(45  12 12)" />
        <rect x="10.5" y="1" width="3" height="4" rx="1.5" transform="rotate(90  12 12)" />
        <rect x="10.5" y="1" width="3" height="4" rx="1.5" transform="rotate(135 12 12)" />
        <rect x="10.5" y="1" width="3" height="4" rx="1.5" transform="rotate(180 12 12)" />
        <rect x="10.5" y="1" width="3" height="4" rx="1.5" transform="rotate(225 12 12)" />
        <rect x="10.5" y="1" width="3" height="4" rx="1.5" transform="rotate(270 12 12)" />
        <rect x="10.5" y="1" width="3" height="4" rx="1.5" transform="rotate(315 12 12)" />
      </g>
      <circle cx="12" cy="12" r="4.2" />
    </svg>
  )
}
