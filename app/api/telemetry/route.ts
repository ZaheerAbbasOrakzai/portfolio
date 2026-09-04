import { telemetry } from '../../../lib/site'

export async function GET() {
  return new Response(
    JSON.stringify({
      timestamp: Date.now(),
      metrics: {
        agents: telemetry.agents,
        daily_calls: telemetry.dailyCalls,
        uptime: telemetry.uptime
      }
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  )
}
