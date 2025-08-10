// Input sanitization and validation utilities
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+=/gi, '') // Remove event handlers
    .replace(/script/gi, '') // Remove script tags
    .slice(0, 1000); // Limit length to prevent buffer overflow
};

export const sanitizeEmail = (email: string): string => {
  if (typeof email !== 'string') return '';
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const sanitized = email.trim().toLowerCase().slice(0, 254); // RFC 5321 limit
  
  return emailRegex.test(sanitized) ? sanitized : '';
};

export const sanitizePhone = (phone: string): string => {
  if (typeof phone !== 'string') return '';
  
  // Remove all non-numeric characters except +, -, (, ), and spaces
  return phone.replace(/[^\d\s\-$$$$\+]/g, '').slice(0, 20);
};

export const validateRequired = (value: string, fieldName: string): string | null => {
  if (!value || value.trim().length === 0) {
    return `${fieldName} is required`;
  }
  return null;
};

export const validateEmail = (email: string): string | null => {
  const sanitized = sanitizeEmail(email);
  if (!sanitized) {
    return 'Please enter a valid email address';
  }
  return null;
};

export const validateGPA = (gpa: string): string | null => {
  if (!gpa) return null; // GPA is optional
  
  const numGPA = parseFloat(gpa);
  if (isNaN(numGPA) || numGPA < 0 || numGPA > 4) {
    return 'GPA must be between 0.0 and 4.0';
  }
  return null;
};

export const validateTextLength = (text: string, fieldName: string, minLength: number = 0, maxLength: number = 1000): string | null => {
  if (text.length < minLength) {
    return `${fieldName} must be at least ${minLength} characters`;
  }
  if (text.length > maxLength) {
    return `${fieldName} must be no more than ${maxLength} characters`;
  }
  return null;
};

// Rate limiting utility
class RateLimiter {
  private attempts: Map<string, { count: number; lastAttempt: number }> = new Map();
  private maxAttempts: number;
  private windowMs: number;

  constructor(maxAttempts: number = 3, windowMs: number = 300000) { // 5 minutes default
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const userAttempts = this.attempts.get(identifier);

    if (!userAttempts) {
      this.attempts.set(identifier, { count: 1, lastAttempt: now });
      return true;
    }

    // Reset if window has passed
    if (now - userAttempts.lastAttempt > this.windowMs) {
      this.attempts.set(identifier, { count: 1, lastAttempt: now });
      return true;
    }

    // Check if under limit
    if (userAttempts.count < this.maxAttempts) {
      userAttempts.count++;
      userAttempts.lastAttempt = now;
      return true;
    }

    return false;
  }

  getRemainingTime(identifier: string): number {
    const userAttempts = this.attempts.get(identifier);
    if (!userAttempts) return 0;
    
    const elapsed = Date.now() - userAttempts.lastAttempt;
    return Math.max(0, this.windowMs - elapsed);
  }
}

export const formRateLimiter = new RateLimiter(3, 300000); // 3 attempts per 5 minutes

// Generate CSRF-like token for form submissions
export const generateFormToken = (): string => {
  return btoa(Date.now().toString() + Math.random().toString()).replace(/[^a-zA-Z0-9]/g, '');
};

// Validate form token (basic implementation)
export const validateFormToken = (token: string): boolean => {
  if (!token || typeof token !== 'string') return false;
  
  try {
    const decoded = atob(token.replace(/[^a-zA-Z0-9]/g, ''));
    const timestamp = parseInt(decoded.substring(0, 13));
    const now = Date.now();
    
    // Token valid for 1 hour
    return (now - timestamp) < 3600000;
  } catch {
    return false;
  }
};
