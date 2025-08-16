import Link from 'next/link';

export default function AdminNav() {
  return (
    <nav>
      <ul>
        <li><Link href="/admin/personalization">Personalization</Link></li>
        <li><Link href="/admin/ugc">UGC</Link></li>
        <li><Link href="/admin/resale">Resale</Link></li>
        <li><Link href="/admin/sustainability">Sustainability</Link></li>
      </ul>
    </nav>
  );
}
