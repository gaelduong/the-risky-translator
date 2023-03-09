// @ts-nocheck

import { useRef } from 'react'
import { useEffect } from 'react'
import './game.css'

let x = 0
const Board = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      console.log(canvas.width)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.beginPath()
      ctx.fillStyle = 'green'
      ctx.arc(x, 100, 20, 0, Math.PI * 2)
      ctx.stroke()
      x++
      // ctx.fillRect(10, 10, 250, 100)

      requestAnimationFrame(render)
    }
    render()
  }, [])

  return (
    <div>
      <canvas id="canvas" ref={canvasRef}></canvas>
    </div>
  )
}

export default Board
