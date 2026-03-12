import type { SVGProps } from 'react'

export default function Moon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path className="moon-body" d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      <circle className="moon-star-1" cx="15"   cy="3"   r="0.9" />
      <circle className="moon-star-2" cx="17.5" cy="6.5" r="0.65" />
      <circle className="moon-star-3" cx="13"   cy="6"   r="0.5" />
    </svg>
  )
}
