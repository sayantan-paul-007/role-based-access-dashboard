'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import hero_dark from '@/public/hero_image_dark.png'
import hero_light from '@/public/hero_image_light.png'
import { useTheme } from 'next-themes'
const HeroImage = () => {
    const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null 

  return (
    <>
      <Image
          src={theme === 'dark' ? hero_dark : hero_light}
          alt={`Hero ${theme}`}
          className='w-full md:w-3/4 rounded-xl shadow-[0_0_60px_20px_theme(colors.primary)]'
        />
    </>
  )
}

export default HeroImage