import { telemetry } from '../../../lib/site'

export async function GET() {
  return new Response(
    JSON.stringify({
      status: 'ok',
      uptime: telemetry.uptime,
      agents: telemetry.agents,
      daily_calls: telemetry.dailyCalls
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  )
}
