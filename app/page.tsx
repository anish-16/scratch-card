"use client"

import { useEffect, useRef, useState } from "react"

export default function ScratchCard() {
  const [isScratched, setIsScratched] = useState(false)
  const [copied, setCopied] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageCanvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [scratchPercentage, setScratchPercentage] = useState(0)
  const [bgColor, setBgColor] = useState<keyof typeof bgColors>("purple")
  
  const bgColors = {
    purple: "from-purple-900 via-purple-800 to-indigo-900",
    violet: "from-violet-900 via-purple-900 to-fuchsia-900",
    deep: "from-indigo-950 via-purple-950 to-purple-900",
    royal: "from-purple-800 via-violet-800 to-purple-900",
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = 300
    const height = 500
    canvas.width = width
    canvas.height = height

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, height)
    gradient.addColorStop(0, "#a855f7")
    gradient.addColorStop(0.5, "#9333ea")
    gradient.addColorStop(1, "#7e22ce")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    // Add sparkle effects
    ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const size = Math.random() * 3 + 1
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fill()
    }

    // Add text with shadow
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)"
    ctx.shadowBlur = 10
    ctx.shadowOffsetX = 2
    ctx.shadowOffsetY = 2
    
    ctx.fillStyle = "white"
    ctx.font = 'bold 56px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("Scratch", width / 2, height / 2 - 100)
    ctx.fillText("& Win!", width / 2, height / 2 - 30)

    // Add gift icon with glow
    ctx.shadowBlur = 20
    ctx.shadowColor = "rgba(255, 255, 255, 0.5)"
    ctx.font = "120px Arial"
    ctx.fillText("🎁", width / 2, height / 2 + 100)
    
    // Reset shadow
    ctx.shadowBlur = 0
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0

    const imageCanvas = imageCanvasRef.current
    if (imageCanvas) {
      const imgCtx = imageCanvas.getContext("2d")
      if (imgCtx) {
        imageCanvas.width = width
        imageCanvas.height = height

        // Create gradient background
        const gradient = imgCtx.createLinearGradient(0, 0, 0, height)
        gradient.addColorStop(0, "#faf5ff")
        gradient.addColorStop(1, "#f3e8ff")
        imgCtx.fillStyle = gradient
        imgCtx.fillRect(0, 0, width, height)

        // Decorative circles
        imgCtx.fillStyle = "rgba(168, 85, 247, 0.1)"
        imgCtx.beginPath()
        imgCtx.arc(-30, 50, 100, 0, Math.PI * 2)
        imgCtx.fill()
        imgCtx.beginPath()
        imgCtx.arc(width + 30, height - 50, 120, 0, Math.PI * 2)
        imgCtx.fill()

        // Logo with gradient
        const logoGradient = imgCtx.createLinearGradient(0, 40, 0, 80)
        logoGradient.addColorStop(0, "#9333ea")
        logoGradient.addColorStop(1, "#7e22ce")
        imgCtx.fillStyle = logoGradient
        imgCtx.font = "bold 36px Georgia, serif"
        imgCtx.textAlign = "center"
        imgCtx.fillText("CLAY", width / 2, 70)

        imgCtx.font = "bold 14px Georgia, serif"
        imgCtx.fillStyle = "#a855f7"
        imgCtx.fillText("Co.", width / 2 + 50, 65)

        
        imgCtx.strokeStyle = "#e9d5ff"
        imgCtx.lineWidth = 2
        imgCtx.beginPath()
        imgCtx.moveTo(40, 100)
        imgCtx.lineTo(width - 40, 100)
        imgCtx.stroke()

        
        imgCtx.fillStyle = "#9333ea"
        imgCtx.beginPath()
        imgCtx.roundRect(width / 2 - 60, 120, 120, 40, 20)
        imgCtx.fill()

        imgCtx.fillStyle = "white"
        imgCtx.font = 'bold 20px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        imgCtx.fillText("20% OFF", width / 2, 145)

        
        imgCtx.font = 'bold 26px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        imgCtx.fillStyle = "#1f2937"
        imgCtx.fillText("Special Discount", width / 2, 195)

        imgCtx.font = '14px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        imgCtx.fillStyle = "#6b7280"
        imgCtx.fillText("+ Free Gift with ₹299 Purchase", width / 2, 220)

        
        imgCtx.shadowColor = "rgba(0, 0, 0, 0.1)"
        imgCtx.shadowBlur = 15
        imgCtx.shadowOffsetY = 5
        
        imgCtx.fillStyle = "white"
        imgCtx.beginPath()
        imgCtx.roundRect(30, 250, width - 60, 90, 15)
        imgCtx.fill()

        imgCtx.shadowBlur = 0
        imgCtx.shadowOffsetY = 0

        
        imgCtx.strokeStyle = "#e9d5ff"
        imgCtx.lineWidth = 2
        imgCtx.setLineDash([5, 5])
        imgCtx.beginPath()
        imgCtx.roundRect(30, 250, width - 60, 90, 15)
        imgCtx.stroke()
        imgCtx.setLineDash([])

        imgCtx.fillStyle = "#9333ea"
        imgCtx.font = '12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        imgCtx.textAlign = "center"
        imgCtx.fillText("COUPON CODE", width / 2, 275)

        imgCtx.fillStyle = "#1f2937"
        imgCtx.font = "bold 28px monospace"
        imgCtx.fillText("CCBB20", width / 2, 310)

       
        imgCtx.fillStyle = "#f3e8ff"
        imgCtx.beginPath()
        imgCtx.roundRect(width / 2 + 60, 295, 30, 30, 8)
        imgCtx.fill()
        
        imgCtx.fillStyle = "#9333ea"
        imgCtx.font = "18px Arial"
        imgCtx.fillText("📋", width / 2 + 75, 313)

        
        const btnGradient = imgCtx.createLinearGradient(0, 370, 0, 420)
        btnGradient.addColorStop(0, "#a855f7")
        btnGradient.addColorStop(1, "#9333ea")
        imgCtx.fillStyle = btnGradient
        imgCtx.beginPath()
        imgCtx.roundRect(30, 370, width - 60, 50, 25)
        imgCtx.fill()

        imgCtx.fillStyle = "white"
        imgCtx.font = 'bold 18px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        imgCtx.fillText("Claim Now 🎉", width / 2, 400)

        
        imgCtx.fillStyle = "#9ca3af"
        imgCtx.font = '11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        imgCtx.fillText("*Terms and Conditions Apply", width / 2, 455)
        
        
        imgCtx.fillText("Valid until Dec 31, 2025", width / 2, 475)
      }
    }
  }, [])

  const handleScratch = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (isScratched) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const rect = canvas.getBoundingClientRect()

    let x: number, y: number

    if ('touches' in e) {
      x = e.touches[0].clientX - rect.left
      y = e.touches[0].clientY - rect.top
    } else {
      x = e.clientX - rect.left
      y = e.clientY - rect.top
    }

    ctx.globalCompositeOperation = "destination-out"
    ctx.beginPath()
    ctx.arc(x, y, 40, 0, Math.PI * 2)
    ctx.fill()

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data
    let transparentPixels = 0

    for (let i = 3; i < data.length; i += 4) {
      if (data[i] < 128) {
        transparentPixels++
      }
    }

    const percentage = (transparentPixels / (data.length / 4)) * 100
    setScratchPercentage(percentage)

    if (percentage > 50) {
      setIsScratched(true)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText("CCBB20")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgColors[bgColor]} flex items-center justify-center p-4 relative overflow-hidden`}>
    
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Color Switcher */}
      <div className="absolute top-6 right-6 flex gap-2 z-50">
        {(Object.keys(bgColors) as Array<keyof typeof bgColors>).map((color) => (
          <button
            key={color}
            onClick={() => setBgColor(color)}
            className={`w-10 h-10 rounded-full border-2 transition-all ${
              bgColor === color ? "border-white scale-110" : "border-white/30 hover:border-white/60"
            } ${
              color === "purple" ? "bg-gradient-to-br from-purple-900 to-indigo-900" :
             
              "bg-gradient-to-br from-purple-800 to-purple-900"
            }`}
            title={color}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl">
            🎁 Claim Your Rewards!
          </h1>
          
        </div>

       {/* Phone Mockup */}
<div className="w-full max-w-sm transform hover:scale-105 transition-transform duration-300">
  <div className="bg-gradient-to-b from-gray-900 to-black rounded-[3rem] shadow-2xl overflow-hidden border-[14px] border-gray-900 relative">
   {/* Punch-hole camera */}
<div className="absolute top-3 left-1/2 -translate-x-1/2 z-50">
  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
    <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
  </div>
</div>


            {/* Screen Content */}
            <div
              className="bg-gradient-to-b from-white to-gray-50 w-full flex items-center justify-center relative overflow-hidden"
              style={{ height: "600px" }}
            >
              {/* Status bar */}
              <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-8 text-xs text-gray-800 z-40">
                <span className="font-semibold">9:41</span>
                <div className="flex items-center gap-1">
                  <span>📶</span>
                  <span>📡</span>
                  <span>🔋</span>
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center pt-8">
                <canvas
                  ref={imageCanvasRef}
                  className="rounded-2xl"
                  style={{
                    width: "300px",
                    height: "500px",
                  }}
                />
              </div>

              <div className="w-full h-full flex items-center justify-center p-6 pt-14">
                {!isScratched && (
                  <canvas
                    ref={canvasRef}
                    onMouseDown={() => setIsDrawing(true)}
                    onMouseUp={() => setIsDrawing(false)}
                    onMouseMove={(e) => isDrawing && handleScratch(e)}
                    onTouchStart={() => setIsDrawing(true)}
                    onTouchEnd={() => setIsDrawing(false)}
                    onTouchMove={handleScratch}
                    className="cursor-pointer rounded-2xl shadow-2xl relative z-10 hover:shadow-purple-500/50 transition-shadow"
                    style={{
                      touchAction: "none",
                      width: "300px",
                      height: "500px",
                    }}
                  />
                )}

                {isScratched && (
                  <div className="relative z-20 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-500">
                    <canvas
                      ref={imageCanvasRef}
                      style={{
                        width: "300px",
                        height: "500px",
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        {!isScratched && (
          <div className="text-center space-y-2 animate-bounce">
            <p className="text-white text-lg font-semibold">👆 Scratch to reveal</p>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <p className="text-purple-200 text-sm">Progress: {scratchPercentage.toFixed(0)}%</p>
            </div>
          </div>
        )}

        {/* Success message */}
        {isScratched && (
          <div className="text-center space-y-3 animate-in slide-in-from-bottom duration-700">
            <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20">
              <p className="text-white text-2xl font-bold mb-2">🎉 Congratulations!</p>
              <p className="text-purple-200">Claim your coupon</p>
              <button
                onClick={copyToClipboard}
                className="mt-4 bg-white text-purple-900 px-6 py-2 rounded-full font-semibold hover:bg-purple-100 transition-colors"
              >
                {copied ? "✓ Copied!" : "Copy Code"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}