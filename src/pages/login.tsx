import Link from 'next/link';

export default function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <Link href="/register">New User? Register via Mobile OTP</Link>
      <br />
      <Link href="/dashboard">Login (simulate success)</Link>
    </div>
  );
}