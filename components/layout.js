import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
      <Head>
        <title>List of Famous People</title>
      </Head>
      <main>{children}</main>
      {!home && (
          <Link href="/" class="btn btn-primary mt-3">
            ← Back to home
          </Link>
        )
      }
    </div>
  );
}