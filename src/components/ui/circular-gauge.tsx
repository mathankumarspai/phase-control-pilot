import * as React from "react"
import { cn } from "@/lib/utils"

interface CircularGaugeProps {
  value: number
  max: number
  size?: number
  strokeWidth?: number
  className?: string
  color?: string
  label?: string
  unit?: string
  onChange?: (value: number) => void
}

export const CircularGauge = React.forwardRef<
  HTMLDivElement,
  CircularGaugeProps
>(({ value, max, size = 80, strokeWidth = 6, className, color = "#3b82f6", label, unit, onChange, ...props }, ref) => {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const progress = (value / max) * 100
  const strokeDasharray = `${circumference} ${circumference}`
  const strokeDashoffset = circumference - (progress / 100) * circumference
  
  const handleClick = (event: React.MouseEvent<SVGElement>) => {
    if (!onChange) return
    
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX)
    let normalizedAngle = (angle + Math.PI / 2) / (2 * Math.PI)
    
    if (normalizedAngle < 0) normalizedAngle += 1
    if (normalizedAngle > 1) normalizedAngle = 1
    
    const newValue = Math.round(normalizedAngle * max)
    onChange(newValue)
  }

  return (
    <div
      ref={ref}
      className={cn("relative inline-flex flex-col items-center justify-center", className)}
      style={{ width: size, height: size }}
      {...props}
    >
      <svg
        className="transform -rotate-90 cursor-pointer"
        width={size}
        height={size}
        onClick={handleClick}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="opacity-30"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-in-out"
          style={{
            filter: "drop-shadow(0 0 4px currentColor)"
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-sm font-bold text-foreground">{value}</span>
        {unit && <span className="text-xs text-muted-foreground">{unit}</span>}
      </div>
      {label && <span className="text-xs font-medium text-muted-foreground mt-1 text-center">{label}</span>}
    </div>
  )
})

CircularGauge.displayName = "CircularGauge"