import { useEffect, useState } from "react";

import { WalletConnector } from "@/components/wallet-connector";
import { publicAsset } from "@/constant/APP";
import Gallery from './components/gallery';
import { DEFAULT_IMAGES, DEFAULT_SEGMENTS, INITIAL_IMAGES } from './helpers/gallery-images';

export function ConnectPage() {
  const [galleryImages, setGalleryImages] = useState(INITIAL_IMAGES)

  useEffect(() => {
    if (INITIAL_IMAGES.length >= DEFAULT_IMAGES.length) {
      return
    }

    const browserWindow = window as Window & {
      cancelIdleCallback?: (handle: number) => void
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number
    }
    let timeoutId: number | null = null
    let idleId: number | null = null

    const promoteImages = () => {
      setGalleryImages(DEFAULT_IMAGES)
    }

    if (browserWindow.requestIdleCallback) {
      idleId = browserWindow.requestIdleCallback(promoteImages, { timeout: 1200 })
    } else {
      timeoutId = window.setTimeout(promoteImages, 800)
    }

    return () => {
      if (idleId !== null) {
        browserWindow.cancelIdleCallback?.(idleId)
      }

      if (timeoutId !== null) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [])

  return (
    <main className="bg-primary relative h-screen w-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <Gallery
          images={ galleryImages }
          fit={ 0.8 }
          minRadius={ 600 }
          maxVerticalRotationDeg={ 0 }
          segments={ DEFAULT_SEGMENTS }
          dragDampening={ 2 }
          openedImageWidth="300px"
          openedImageHeight="400px"
          grayscale={ false }
        />
      </div>

      <div
        className="flex w-full max-w-[500px] flex-col items-center gap-6 rounded-[32px] border px-8 py-10 text-center backdrop-blur-xl sm:px-12 sm:py-12"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 219, 17, 0.3) 0%, rgba(255, 219, 17, 0.18) 100%)',
          borderColor: 'rgba(255, 219, 17, 0.38)',
          boxShadow: '0 30px 80px rgba(255, 219, 17, 0.18)'
        }}>

        <img src={publicAsset("assets/brand/bescard.svg")} className="h-14"/>

        <p className="mx-auto max-w-[420px] text-sm leading-7 text-white/90 sm:text-base">
          Connect JoyID and melt your BesCARD.
        </p>
        <WalletConnector className="[&_.ant-btn]:!h-14 [&_.ant-btn]:!px-8 [&_.ant-btn]:!text-[15px] [&_.ant-btn]:!font-medium"/>
      </div>
    </main>
  )
}
