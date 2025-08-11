import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to AirPro Site</h1>
      <Link href="/login">Go to Login</Link>
    </div>
  );
}