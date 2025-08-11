import Link from 'next/link';

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li><Link href="/products/datasheet">Datasheet</Link></li>
        <li><Link href="/products/emailer">E-mailer</Link></li>
        <li><Link href="/products/ebrochure">E-Brochure</Link></li>
      </ul>
    </div>
  );
}