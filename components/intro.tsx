import Image from 'next/image'
import authorImage from '@/public/images/cishocksr.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Chris.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a software engineer based in Cleveland, OH. I&#39;m
          passionate about learning new technologies and sharing knowledge with
          others, in an attempt to make the internet more accessible to everyone.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Chris Shockley'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}