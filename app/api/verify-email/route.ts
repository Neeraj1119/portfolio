import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Basic format check first
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({
        isValid: false,
        error: "Invalid email address",
      });
    }

    // Try Abstract API verification, but don't block on failure
    try {
      const apiKey = process.env.ABSTRACT_API_KEY;
      if (apiKey) {
        const response = await fetch(
          `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`,
          { cache: "no-store" }
        );

        if (response.ok) {
          const data = await response.json();

          const isValid =
            data.is_valid_format?.value &&
            data.deliverability === "DELIVERABLE" &&
            !data.is_disposable_email?.value;

          return NextResponse.json({
            isValid,
            error: isValid ? undefined : "Invalid or disposable email address",
          });
        }
      }
    } catch (apiError) {
      console.warn("Abstract API verification failed, falling back to basic validation:", apiError);
    }

    // Fallback: if Abstract API is unavailable, accept based on regex check
    return NextResponse.json({
      isValid: true,
    });
  } catch (error) {
    console.error("Error verifying email:", error);
    return NextResponse.json(
      { isValid: false, error: "Email verification failed" },
      { status: 500 }
    );
  }
}

