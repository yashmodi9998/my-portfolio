'use client'

import Lottie from 'lottie-react'
import animationData from '../lottie/developer.json'


export default function LottieSection() {
  return (
    <section className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[80vh] flex items-center justify-center text-secondary-foreground">
      <div className="w-full max-w-[80vw] sm:max-w-[400px] md:max-w-[500px] bg-transparent">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </section>
  )
}
