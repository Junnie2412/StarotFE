import { Link } from 'react-router-dom'

export const CircleItem = ({
  text,
  angle,
  bgImage,
  link
}: {
  text: string
  angle: number
  bgImage: string
  link: string
}) => {
  return (
    <Link
      to={link}
      className='absolute w-40 h-40 flex items-center justify-center'
      style={{
        transform: `rotate(${angle}deg) translateY(-200px) rotate(-${angle}deg)`
      }}
    >
      <div
        className='w-full h-full flex items-center justify-center'
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <p className='text-blue text-xs font-bold text-center px-5'>{text}</p>
      </div>
    </Link>
  )
}
