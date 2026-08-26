import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

/* ─────────────────────────────────────────────────────────────────────────────
 * SAARTHI Portal Canvas — Phase 2
 *
 * A self-contained Canvas 2D animation that renders:
 *   1. Deep-blue starfield / background depth
 *   2. Floating circuit-grid lines (orthogonal, faint)
 *   3. A layered geometric portal (outer ring, inner rings, energy core)
 *   4. Circuit pulse traces flowing along the grid
 *   5. Floating voxel blocks (blue/white)
 *   6. Ambient particle field
 *   7. Pointer-reactive parallax shift
 *
 * All drawing uses the approved token colors:
 *   BLUE   #050538  world background
 *   WHITE  #F5F7FF  structure
 *   YELLOW #FFD43B  energy
 *
 * Performance contracts:
 *   - Single rAF loop per canvas
 *   - Proper cleanup on unmount
 *   - DPR-aware rendering (max 2 for performance)
 *   - Particle count scales with viewport area
 *   - Hard stop when prefers-reduced-motion
 * ────────────────────────────────────────────────────────────────────────────── */

// ── Color constants (mirrors tokens.css — not read from CSS to avoid layout thrash) ──
const C_BG      = '#030327'
const C_CIRCUIT = 'rgba(160, 170, 255, '    // + alpha + ')'
const C_WHITE   = 'rgba(245, 247, 255, '    // + alpha + ')'
const C_ENERGY  = 'rgba(255, 212, 59, '     // + alpha + ')'

// ── Particle ──────────────────────────────────────────────────────────────────

interface Particle {
  x: number; y: number
  vx: number; vy: number
  radius: number
  alpha: number
  alphaDir: number   // fade direction: +1 in, -1 out
  isEnergy: boolean  // yellow energy dot vs white ambient
}

// ── Voxel block ───────────────────────────────────────────────────────────────

interface VoxelBlock {
  x: number; y: number
  size: number
  angle: number
  rotSpeed: number
  vy: number        // gentle upward drift
  alpha: number
  color: 'white' | 'blue'
}

// ── Circuit pulse ─────────────────────────────────────────────────────────────

interface CircuitPulse {
  x: number; y: number
  dir: 'h' | 'v'
  speed: number
  length: number
  alpha: number
}

// ─────────────────────────────────────────────────────────────────────────────

function lerp(a: number, b: number, t: number) { return a + (b - a) * t }
function clamp(v: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, v)) }

export interface PortalCanvasOptions {
  /** Whether to enable pointer-parallax interaction */
  interactive?: boolean
}

export function usePortalCanvas(options: PortalCanvasOptions = {}) {
  const { interactive = true } = options
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const rafRef     = useRef<number>(0)
  const pointerRef = useRef({ x: 0.5, y: 0.5 })   // normalized 0-1
  const targetRef  = useRef({ x: 0.5, y: 0.5 })    // smooth target
  const reducedMotion = useReducedMotion()


  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // ── DPR & sizing ──────────────────────────────────────────────────────────
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width  = rect.width  * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()

    const ro = new ResizeObserver(() => { resize() })
    ro.observe(canvas)

    // ── Pointer tracking ──────────────────────────────────────────────────────
    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      targetRef.current.x = clamp((e.clientX - rect.left) / rect.width,  0, 1)
      targetRef.current.y = clamp((e.clientY - rect.top)  / rect.height, 0, 1)
    }

    if (interactive) {
      window.addEventListener('pointermove', onPointerMove, { passive: true })
    }

    // ── State ─────────────────────────────────────────────────────────────────

    // Particles — count scales with area
    const maxParticles = Math.min(80, Math.floor((canvas.width * canvas.height) / 12000))
    const particles: Particle[] = []
    for (let i = 0; i < maxParticles; i++) {
      const isEnergy = Math.random() < 0.12   // ~12% yellow energy dots
      particles.push({
        x:        Math.random() * canvas.width  / dpr,
        y:        Math.random() * canvas.height / dpr,
        vx:       (Math.random() - 0.5) * 0.3,
        vy:       -Math.random() * 0.4 - 0.1,
        radius:   Math.random() * 1.8 + 0.4,
        alpha:    Math.random(),
        alphaDir: Math.random() < 0.5 ? 1 : -1,
        isEnergy,
      })
    }

    // Voxel blocks — 6 floating geometric shapes
    const voxels: VoxelBlock[] = Array.from({ length: 6 }, (_, i) => ({
      x:        (i / 6) * (canvas.width / dpr) * 1.2 - canvas.width / dpr * 0.1 + Math.random() * 100,
      y:        Math.random() * (canvas.height / dpr),
      size:     Math.random() * 18 + 10,
      angle:    Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.008,
      vy:       -Math.random() * 0.15 - 0.05,
      alpha:    Math.random() * 0.25 + 0.10,
      color:    Math.random() < 0.6 ? 'white' : 'blue',
    }))

    // Circuit pulses — horizontal and vertical energy traces
    const pulses: CircuitPulse[] = []
    const spawnPulse = (W: number, H: number) => {
      const dir: 'h' | 'v' = Math.random() < 0.5 ? 'h' : 'v'
      pulses.push({
        x:      dir === 'h' ? -120 : Math.round(Math.random() * W / 60) * 60,
        y:      dir === 'v' ? -80  : Math.round(Math.random() * H / 60) * 60,
        dir,
        speed:  Math.random() * 1.5 + 0.8,
        length: Math.random() * 80 + 40,
        alpha:  Math.random() * 0.5 + 0.2,
      })
    }

    // Portal rings state
    let portalAngle    = 0
    let portalAngle2   = 0
    let portalPulse    = 0   // 0–1 for inner core pulse
    let time           = 0
    let lastPulseSpawn = 0

    // ── Draw helpers ──────────────────────────────────────────────────────────

    function drawCircuitGrid(ctx: CanvasRenderingContext2D, W: number, H: number, px: number, py: number) {
      ctx.save()
      const gridSize = 60
      const offX = px * 15
      const offY = py * 10

      ctx.strokeStyle = `${C_CIRCUIT}0.06)`
      ctx.lineWidth   = 0.5

      // Vertical lines
      for (let x = (offX % gridSize) - gridSize; x < W + gridSize; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, H)
        ctx.stroke()
      }
      // Horizontal lines
      for (let y = (offY % gridSize) - gridSize; y < H + gridSize; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(W, y)
        ctx.stroke()
      }
      ctx.restore()
    }

    function drawCircuitPulses(ctx: CanvasRenderingContext2D, W: number, H: number, dt: number) {
      // Spawn new pulse periodically
      if (time - lastPulseSpawn > 1200 + Math.random() * 800) {
        spawnPulse(W, H)
        lastPulseSpawn = time
      }

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]
        const grad = ctx.createLinearGradient(
          p.dir === 'h' ? p.x          : p.x,
          p.dir === 'v' ? p.y          : p.y,
          p.dir === 'h' ? p.x + p.length : p.x,
          p.dir === 'v' ? p.y + p.length : p.y,
        )
        grad.addColorStop(0,   `${C_CIRCUIT}0)`)
        grad.addColorStop(0.3, `${C_CIRCUIT}${p.alpha.toFixed(2)})`)
        grad.addColorStop(0.7, `${C_ENERGY}${(p.alpha * 0.8).toFixed(2)})`)
        grad.addColorStop(1,   `${C_CIRCUIT}0)`)

        ctx.save()
        ctx.strokeStyle = grad
        ctx.lineWidth   = 1.5
        ctx.beginPath()
        if (p.dir === 'h') {
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p.x + p.length, p.y)
        } else {
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p.x, p.y + p.length)
        }
        ctx.stroke()
        ctx.restore()

        // Advance
        if (p.dir === 'h') p.x += p.speed * dt
        else               p.y += p.speed * dt

        // Remove when off-screen
        if (p.x > W + p.length || p.y > H + p.length) {
          pulses.splice(i, 1)
        }
      }
    }

    function drawPortal(ctx: CanvasRenderingContext2D, cx: number, cy: number, angle1: number, angle2: number, pulse: number, px: number, py: number) {
      // Portal center drifts subtly with pointer
      const pcx = cx + px * 18
      const pcy = cy + py * 12

      // ── Outer atmosphere glow ─────────────────────────────────────────────
      const atm = ctx.createRadialGradient(pcx, pcy, 60, pcx, pcy, 260)
      atm.addColorStop(0,    'rgba(68, 0, 255, 0.18)')
      atm.addColorStop(0.5,  'rgba(26, 0, 160, 0.10)')
      atm.addColorStop(1,    'rgba(3, 3, 39, 0)')
      ctx.fillStyle = atm
      ctx.fillRect(pcx - 280, pcy - 280, 560, 560)

      // ── Outer structural ring (white, dashed-ish via arc segments) ────────
      const OUTER_R = 170
      ctx.save()
      ctx.translate(pcx, pcy)
      ctx.rotate(angle1)

      const segments = 12
      for (let i = 0; i < segments; i++) {
        const startA = (i / segments) * Math.PI * 2
        const endA   = startA + (Math.PI * 2 / segments) * 0.72
        ctx.beginPath()
        ctx.arc(0, 0, OUTER_R, startA, endA)
        ctx.strokeStyle = `${C_WHITE}${0.55 + Math.sin(angle1 * 3 + i) * 0.15})`
        ctx.lineWidth = 2
        ctx.stroke()

        // Corner node dots
        ctx.beginPath()
        ctx.arc(
          Math.cos(startA) * OUTER_R,
          Math.sin(startA) * OUTER_R,
          4, 0, Math.PI * 2,
        )
        ctx.fillStyle = `${C_WHITE}0.8)`
        ctx.fill()
      }
      ctx.restore()

      // ── Middle ring (blue circuit, counter-rotating) ───────────────────────
      const MID_R = 130
      ctx.save()
      ctx.translate(pcx, pcy)
      ctx.rotate(angle2)

      // Dashed circuit ring — 8 segments
      for (let i = 0; i < 8; i++) {
        const startA = (i / 8) * Math.PI * 2
        const endA   = startA + (Math.PI * 2 / 8) * 0.6
        ctx.beginPath()
        ctx.arc(0, 0, MID_R, startA, endA)
        ctx.strokeStyle = `${C_CIRCUIT}${0.6 + Math.sin(angle2 * 2 + i) * 0.2})`
        ctx.lineWidth = 1.5
        ctx.stroke()
      }

      // Small tick marks at each segment joint
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2
        const innerR = MID_R - 8
        const outerR = MID_R + 8
        ctx.beginPath()
        ctx.moveTo(Math.cos(a) * innerR, Math.sin(a) * innerR)
        ctx.lineTo(Math.cos(a) * outerR, Math.sin(a) * outerR)
        ctx.strokeStyle = `${C_WHITE}0.5)`
        ctx.lineWidth = 1
        ctx.stroke()
      }
      ctx.restore()

      // ── Inner ring (energy yellow, rotating with pulse) ───────────────────
      const INNER_R = 90
      ctx.save()
      ctx.translate(pcx, pcy)
      ctx.rotate(-angle1 * 0.7)

      for (let i = 0; i < 6; i++) {
        const startA = (i / 6) * Math.PI * 2
        const endA   = startA + (Math.PI * 2 / 6) * 0.55
        ctx.beginPath()
        ctx.arc(0, 0, INNER_R, startA, endA)
        const energyAlpha = 0.7 + pulse * 0.3
        ctx.strokeStyle = `${C_ENERGY}${energyAlpha.toFixed(2)})`
        ctx.lineWidth   = 1.5 + pulse
        ctx.shadowColor = `${C_ENERGY}1)` // solid yellow shadow
        ctx.shadowBlur  = 8 + pulse * 12
        ctx.stroke()
        ctx.shadowBlur = 0
      }
      ctx.restore()

      // ── Portal depth fill (deep blue gradient circle) ─────────────────────
      const core = ctx.createRadialGradient(pcx, pcy, 0, pcx, pcy, INNER_R - 4)
      core.addColorStop(0,    'rgba(68, 0, 255, 0.45)')
      core.addColorStop(0.4,  'rgba(26, 0, 160, 0.35)')
      core.addColorStop(0.85, 'rgba(5, 5, 56, 0.20)')
      core.addColorStop(1,    'rgba(3, 3, 39, 0)')
      ctx.beginPath()
      ctx.arc(pcx, pcy, INNER_R - 4, 0, Math.PI * 2)
      ctx.fillStyle = core
      ctx.fill()

      // ── Energy core (pulsing yellow center) ───────────────────────────────
      const coreGlow = ctx.createRadialGradient(pcx, pcy, 0, pcx, pcy, 28 + pulse * 18)
      const coreAlpha = 0.55 + pulse * 0.35
      coreGlow.addColorStop(0,   `rgba(255, 240, 140, ${coreAlpha})`)
      coreGlow.addColorStop(0.4, `${C_ENERGY}${(coreAlpha * 0.6).toFixed(2)})`)
      coreGlow.addColorStop(1,   `${C_ENERGY}0)`)
      ctx.beginPath()
      ctx.arc(pcx, pcy, 28 + pulse * 18, 0, Math.PI * 2)
      ctx.fillStyle = coreGlow
      ctx.fill()

      // Solid center dot
      ctx.beginPath()
      ctx.arc(pcx, pcy, 5, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 240, 200, ${(0.85 + pulse * 0.15).toFixed(2)})`
      ctx.fill()

      // ── 4 corner bracket decorations (white) ──────────────────────────────
      const bracketR = OUTER_R + 24
      const bracketAngles = [0, Math.PI / 2, Math.PI, Math.PI * 1.5]
      for (const ba of bracketAngles) {
        const bx = pcx + Math.cos(ba + angle1 * 0.1) * bracketR
        const by = pcy + Math.sin(ba + angle1 * 0.1) * bracketR
        ctx.save()
        ctx.translate(bx, by)
        ctx.rotate(ba + Math.PI / 4)
        ctx.strokeStyle = `${C_WHITE}0.35)`
        ctx.lineWidth   = 1.5
        const bs = 10
        ctx.beginPath()
        ctx.moveTo(-bs, 0); ctx.lineTo(-bs, -bs); ctx.lineTo(0, -bs)
        ctx.stroke()
        ctx.restore()
      }
    }

    function drawVoxels(ctx: CanvasRenderingContext2D, dt: number) {
      for (const v of voxels) {
        // Drift upward, wrap
        v.y += v.vy * dt
        v.angle += v.rotSpeed * dt
        if (v.y < -v.size * 3) {
          v.y = (canvas!.height / dpr) + v.size
          v.x = Math.random() * (canvas!.width / dpr)
        }

        ctx.save()
        ctx.translate(v.x, v.y)
        ctx.rotate(v.angle)
        ctx.globalAlpha = v.alpha

        const s = v.size
        // Top face
        ctx.beginPath()
        ctx.moveTo(0, -s * 0.55)
        ctx.lineTo(s * 0.5, -s * 0.28)
        ctx.lineTo(0, 0)
        ctx.lineTo(-s * 0.5, -s * 0.28)
        ctx.closePath()
        ctx.fillStyle   = v.color === 'white' ? `${C_WHITE}0.9)` : 'rgba(26,0,160,0.9)'
        ctx.strokeStyle = v.color === 'white' ? `${C_WHITE}0.6)` : 'rgba(68,0,255,0.7)'
        ctx.lineWidth   = 0.8
        ctx.fill()
        ctx.stroke()

        // Right face
        ctx.beginPath()
        ctx.moveTo(s * 0.5, -s * 0.28)
        ctx.lineTo(s * 0.5, s * 0.22)
        ctx.lineTo(0, s * 0.5)
        ctx.lineTo(0, 0)
        ctx.closePath()
        ctx.fillStyle = v.color === 'white' ? `${C_WHITE}0.55)` : 'rgba(5,5,56,0.9)'
        ctx.fill(); ctx.stroke()

        // Left face
        ctx.beginPath()
        ctx.moveTo(-s * 0.5, -s * 0.28)
        ctx.lineTo(-s * 0.5, s * 0.22)
        ctx.lineTo(0, s * 0.5)
        ctx.lineTo(0, 0)
        ctx.closePath()
        ctx.fillStyle = v.color === 'white' ? `${C_WHITE}0.35)` : 'rgba(3,3,39,0.9)'
        ctx.fill(); ctx.stroke()

        ctx.restore()
      }
    }

    function drawParticles(ctx: CanvasRenderingContext2D, dt: number, W: number, H: number) {
      for (const p of particles) {
        p.x += p.vx * dt
        p.y += p.vy * dt
        p.alpha += p.alphaDir * 0.003 * dt
        if (p.alpha >= 0.85 || p.alpha <= 0.05) p.alphaDir *= -1
        p.alpha = clamp(p.alpha, 0.05, 0.85)

        // Wrap horizontally, reset when off top
        if (p.x < 0) p.x = W
        if (p.x > W) p.x = 0
        if (p.y < 0) { p.y = H; p.x = Math.random() * W }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        if (p.isEnergy) {
          ctx.fillStyle = `${C_ENERGY}${(p.alpha * 0.7).toFixed(2)})`
          ctx.shadowColor = `${C_ENERGY}1)`
          ctx.shadowBlur  = 4
        } else {
          ctx.fillStyle = `${C_WHITE}${(p.alpha * 0.45).toFixed(2)})`
          ctx.shadowBlur = 0
        }
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    // ── Main animation loop ───────────────────────────────────────────────────

    let lastTime = 0

    const loop = (ts: number) => {
      const dt = Math.min(ts - lastTime, 50)   // cap dt to avoid big jumps
      lastTime = ts
      time     = ts

      const W   = canvas.width  / dpr
      const H   = canvas.height / dpr

      if (W === 0 || H === 0) { rafRef.current = requestAnimationFrame(loop); return }

      const cx  = W / 2
      const cy  = H / 2

      // Advance state
      portalAngle  += 0.003 * dt * 0.06
      portalAngle2 -= 0.005 * dt * 0.06
      portalPulse   = (Math.sin(ts * 0.0008) + 1) / 2   // 0–1

      // Pointer
      pointerRef.current.x = lerp(pointerRef.current.x, targetRef.current.x, 0.04)
      pointerRef.current.y = lerp(pointerRef.current.y, targetRef.current.y, 0.04)
      const px = (pointerRef.current.x - 0.5) * 2
      const py = (pointerRef.current.y - 0.5) * 2

      // ── Draw ────────────────────────────────────────────────────────────────

      // Background
      ctx.fillStyle = C_BG
      ctx.fillRect(0, 0, W, H)

      // Radial vignette
      const bgGrad = ctx.createRadialGradient(cx + px * 30, cy + py * 20, 0, cx, cy, Math.max(W, H) * 0.85)
      bgGrad.addColorStop(0,   'rgba(8, 8, 100, 0.85)')
      bgGrad.addColorStop(0.5, 'rgba(5, 5, 56,  0.60)')
      bgGrad.addColorStop(1,   'rgba(3, 3, 39,  0.40)')
      ctx.fillStyle = bgGrad
      ctx.fillRect(0, 0, W, H)

      drawCircuitGrid(ctx, W, H, px, py)
      drawCircuitPulses(ctx, W, H, dt)
      drawVoxels(ctx, dt)
      drawPortal(ctx, cx, cy, portalAngle, portalAngle2, portalPulse, px, py)
      drawParticles(ctx, dt, W, H)

      rafRef.current = requestAnimationFrame(loop)
    }

    if (!reducedMotion) {
      rafRef.current = requestAnimationFrame(loop)
    } else {
      // Static fallback — draw one frame
      const W   = canvas.width  / dpr
      const H   = canvas.height / dpr
      const cx  = W / 2
      const cy  = H / 2
      ctx.fillStyle = C_BG
      ctx.fillRect(0, 0, W, H)
      drawPortal(ctx, cx, cy, 0, 0, 0.5, 0, 0)
    }

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      if (interactive) window.removeEventListener('pointermove', onPointerMove)
    }
  }, [interactive, reducedMotion])

  return canvasRef
}
