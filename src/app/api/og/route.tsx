import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request): Promise<Response> {
  try {
    const { searchParams } = new URL(request.url)

    const title = searchParams.get('title') || 'Vincent VIDOT'
    const description =
      searchParams.get('description') ||
      'Freelance Full-Stack Developer based in France'

    return new ImageResponse(
      (
        <div
          style={{
            width: `1200px`,
            height: `630px`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            background:
              'linear-gradient(to bottom right, #eb2603, rgba(235, 38, 3, 0.8))',
            padding: '60px',
            color: '#f4e2c8',
            fontFamily: 'sans-serif',
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: 700,
            }}
          >
            {title}
          </h1>
          <p style={{ fontSize: 36, marginTop: 20, color: '#343331' }}>
            {description}
          </p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch {
    return new Response('Failed to generate OG image', { status: 500 })
  }
}
