import { useState } from 'react'

type SporePreviewProps = {
  alt: string
  className?: string
  src?: string | null
}

export function SporePreview({ alt, className, src }: SporePreviewProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null)

  if (src && failedSrc !== src) {
    return (
      <img
        alt={alt}
        className={className}
        src={src}
        onError={() => {
          setFailedSrc(src)
        }}
      />
    )
  }

  return (
    <div className={['spore-preview-fallback', className].filter(Boolean).join(' ')}>
      <span className="spore-preview-fallback-title">Preview unavailable</span>
    </div>
  )
}
