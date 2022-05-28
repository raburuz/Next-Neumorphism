import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Neumorphism } from '../components/neumorphism/Neumorphism';
import { FormProvider } from '../context/FormProvider';
import { Form } from '../components/form/Form';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Neumorphism CSS Generator</title>
        <meta name="description" content="Generate your own Soft-UI CSS code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Neumorphism</h1>
        <span>Generate an awesome shadow for your website</span>
        <span> Simple and easy CSS generator </span>

        <div className={styles.container}>
          <FormProvider>
            <>
              <Neumorphism />
              <Form />
            </>
          </FormProvider>
        </div>
      </main>

      <footer className={styles.footer}>Create by Jean Ramírez 💻</footer>
    </>
  );
};

export default Home;
