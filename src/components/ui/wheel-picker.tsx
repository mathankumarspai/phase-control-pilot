import React, { useState, useRef, useCallback, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface WheelPickerProps {
  value: number;
  min: number;
  max: number;
  step: number;
  suffix: string;
  decimals?: number;
  onChange: (value: number) => void;
  className?: string;
}

export const WheelPicker: React.FC<WheelPickerProps> = ({
  value,
  min,
  max,
  step,
  suffix,
  decimals = 0,
  onChange,
  className
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startY = useRef<number>(0);
  const startValue = useRef<number>(value);
  const accumulatedDelta = useRef<number>(0);

  const formatValue = useCallback((val: number) => {
    return decimals > 0 ? val.toFixed(decimals) : val.toString().padStart(2, '0');
  }, [decimals]);

  const clampValue = useCallback((val: number) => {
    return Math.max(min, Math.min(max, val));
  }, [min, max]);

  const generateVisibleValues = useCallback(() => {
    const values = [];
    for (let i = -2; i <= 2; i++) {
      const val = clampValue(value + i * step);
      values.push(val);
    }
    return values;
  }, [value, step, clampValue]);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? step : -step;
    const newValue = clampValue(value + delta);
    onChange(newValue);
  }, [value, step, onChange, clampValue]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const height = rect.height;
    
    // Click zones: top third increments, bottom third decrements
    if (y < height / 3) {
      const newValue = clampValue(value + step);
      onChange(newValue);
      return;
    } else if (y > (height * 2) / 3) {
      const newValue = clampValue(value - step);
      onChange(newValue);
      return;
    }
    
    // Start drag
    setIsDragging(true);
    startY.current = e.clientY;
    startValue.current = value;
    accumulatedDelta.current = 0;
  }, [value, step, onChange, clampValue]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    
    const deltaY = startY.current - e.clientY;
    accumulatedDelta.current += deltaY;
    startY.current = e.clientY;
    
    const threshold = 15;
    if (Math.abs(accumulatedDelta.current) >= threshold) {
      const steps = Math.floor(Math.abs(accumulatedDelta.current) / threshold);
      const direction = accumulatedDelta.current > 0 ? 1 : -1;
      const newValue = clampValue(value + direction * steps * step);
      onChange(newValue);
      accumulatedDelta.current = 0;
    }
  }, [isDragging, value, step, onChange, clampValue]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    accumulatedDelta.current = 0;
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const visibleValues = generateVisibleValues();

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div
        ref={containerRef}
        className="relative w-20 h-32 cursor-pointer select-none overflow-hidden rounded-xl"
        style={{
          background: 'var(--wheel-background)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.12)'
        }}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
      >
        {/* Divider lines */}
        <div className="absolute top-8 left-2 right-2 h-px bg-white/20" />
        <div className="absolute bottom-8 left-2 right-2 h-px bg-white/20" />
        
        {/* Selection highlight */}
        <div 
          className="absolute top-8 bottom-8 left-0 right-0 rounded-lg"
          style={{ 
            background: 'var(--wheel-selection)',
            boxShadow: 'var(--shadow-wheel)'
          }}
        />
        
        {/* Values */}
        <div className="relative h-full flex flex-col justify-center items-center">
          {visibleValues.map((val, index) => (
            <div
              key={`${val}-${index}`}
              className={cn(
                "h-8 flex items-center justify-center transition-all duration-200",
                index === 2 ? 
                  "text-white text-lg font-bold scale-105" : 
                  "text-white/40 text-base font-medium"
              )}
              style={{
                transform: isDragging && index === 2 ? 'scale(1.02)' : undefined
              }}
            >
              {formatValue(val)} {suffix}
            </div>
          ))}
        </div>
      </div>
      
      {/* Step indicator */}
      <div className="mt-2 text-xs text-white/50 font-medium">
        Step: {step} {suffix}
      </div>
    </div>
  );
};