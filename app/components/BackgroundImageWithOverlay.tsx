export default function BackgroundImageWithOverlay({ image, className }: { image: string, className?: string }) {
   return (
      <div className={`pointer-events-none absolute inset-x-0 top-0 aspect-video ${className}`}>
         <div
            className="absolute inset-0 bg-contain bg-top bg-no-repeat"
            style={{ backgroundImage: `url("${image}")` }}
         />
         <div className="absolute inset-0 bg-background/60" />
         <div className="absolute inset-0 bg-linear-to-b from-background via-background/70 via-45% to-transparent" />
         <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/70 via-70% to-background" />
      </div>
   )
}