import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function firstPost() {
  return (
    <Layout>
      {/* Component Head dari next js ini adalah ganti dari tag <head> pada html dan di component Head ini juga kita bisa kita gunakan untuk memberikan metadata, icon, title dll seperti halnya halaman html pada umumnya */}
      <Head>
        <title>First Post</title>
        <meta name="description" content="This is description for first page" />
      </Head>
      <h1>First Post</h1>
      <p>
        <Link href="/">Back to home</Link>
      </p>
    </Layout>
  );
}
