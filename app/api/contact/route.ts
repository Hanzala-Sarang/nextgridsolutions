import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/sendEmail';
import { z } from 'zod';

// Define schema for form validation
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(5, { message: "Message must be at least 5 characters" }),
  service: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Validate form data
    const result = contactSchema.safeParse(body);
    
    if (!result.success) {
      // Return validation errors
      return NextResponse.json(
        { 
          success: false, 
          errors: result.error.flatten().fieldErrors 
        }, 
        { status: 400 }
      );
    }
    
    // Send email with validated data
    const emailResult = await sendEmail(result.data);
    
    if (!emailResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Failed to send email", 
          error: emailResult.error 
        }, 
        { status: 500 }
      );
    }
    
    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: "Email sent successfully" 
      }, 
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Server error", 
        error: (error as Error).message 
      }, 
      { status: 500 }
    );
  }
}