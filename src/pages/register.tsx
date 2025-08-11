import Link from 'next/link';

export default function Register() {
  return (
    <div>
      <h1>Registration via Mobile OTP</h1>
      <Link href="/dashboard">OTP Verified (Go to Dashboard)</Link>
    </div>
  );
}