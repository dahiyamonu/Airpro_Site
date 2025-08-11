import Link from 'next/link';

export default function Packages() {
  return (
    <div>
      <h1>Packages (Offer)</h1>
      <ul>
        <li><Link href="/packages/silver">Silver</Link></li>
        <li><Link href="/packages/gold">Gold</Link></li>
        <li><Link href="/packages/platinum">Platinum</Link></li>
      </ul>
    </div>
  );
}