import { NextResponse } from 'next/server'

// GET /api/funky-handler
export async function GET(_request: Request) {
  return NextResponse.json({
    status: 'success',
    message: 'Welcome to the Intergalactic Fun Zone! 🚀',
    funFact: 'Did you know? Bananas are berries, but strawberries aren’t!',
  })
}

// POST /api/funky-handler
export async function POST(request: Request) {
  try {
    const data = await request.json()
    return NextResponse.json({
      status: 'success',
      message:
        'Cosmic data received! Your info has been teleported to our secret lab.',
      receivedData: data,
    })
  } catch (_error) {
    return NextResponse.json(
      {
        status: 'error',
        message:
          'Uh-oh, a space-time glitch occurred while processing your data!',
      },
      { status: 400 }
    )
  }
}

// PUT /api/funky-handler
export async function PUT(request: Request) {
  try {
    const data = await request.json()
    return NextResponse.json({
      status: 'success',
      message:
        'Your update has been broadcasted across the galaxy. The Galactic Council approves!',
      updatedData: data,
    })
  } catch (_error) {
    return NextResponse.json(
      {
        status: 'error',
        message:
          'Space anomaly encountered during your update. Please try again later!',
      },
      { status: 400 }
    )
  }
}

// DELETE /api/funky-handler
export async function DELETE(_request: Request) {
  return NextResponse.json({
    status: 'success',
    message: 'Your request has vanished into the cosmos like a shooting star!',
  })
}
