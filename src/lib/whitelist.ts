// This is a simplified whitelist for demonstration purposes.
// In a real application, you would likely manage this list in a database
// or an external service.
//
// Add emails of users who should have automatic access to the course content upon registration.
export const whitelist: string[] = [
  // 'jane.doe@example.com',
  // 'john.smith@example.com',
].map(email => email.toLowerCase());
