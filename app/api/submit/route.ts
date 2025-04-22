import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const googleScriptURL =
    "https://script.google.com/macros/s/AKfycbwZoDO0eUXLHkEHUgIocf23anfhc3fqabJ-nOa5iLhdJ4Z2gTrXhNROYh1t9F7Y1HLQog/exec";

  try {
    const result = await fetch(googleScriptURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Error sending data to Google Sheets" },
      { status: 500 }
    );
  }
}
