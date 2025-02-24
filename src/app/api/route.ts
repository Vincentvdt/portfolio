// app/route.ts

import { NextResponse } from 'next/server'

export async function GET(_request: Request) {
  return NextResponse.json({
    status: 'success',
    message: 'Welcome to the Cosmic Portal! 🚀',
    description:
      'You have landed at the main gateway of your next-starter. Enjoy your journey through the stars of creativity!',
    tip: 'Remember: every pixel counts in this universe!',
  })
}
