import Link from 'next/link';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <Link href="/products">Go to Products</Link>
      <br />
      <Link href="/packages">View Packages (Offer)</Link>
    </div>
  );
}