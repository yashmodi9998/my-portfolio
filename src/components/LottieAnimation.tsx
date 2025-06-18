'use client'

import Lottie from 'lottie-react'
import animationData from '../lottie/developer.json'


export default function LottieSection() {
  return (
    <section className="min-h-screen flex items-center justify-center  text-secondary-foreground">
      <div className="w-[300px] md:w-[500px] bg-transparent">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </section>
  )
}
