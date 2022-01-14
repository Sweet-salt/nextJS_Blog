
import styles from '../styles/Home.module.css'
import sanityClient from "@sanity/client";

export default function Home({hello}) {
  return (
    <div className={styles.container}>
      <h1>Blog Home {hello}</h1>
    </div>
  )
}

export async function getStaticProps() {
  const client = sanityClient({
    dataset: 'production',
    projectId: '6kjqkan8',
    useCdn: process.env.NODE_ENV === 'production',
  });
  const data = await client.fetch(`*[_type == 'home'][0]{'mainPostUrl': mainPost -> slug.current}`)
  
  return{
    props: {
      hello: "world",
    },
  };
}