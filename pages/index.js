import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from "../styles/Home.module.css";
import Link from 'next/link';

export async function getStaticProps() {
  const resp = await fetch(
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
  )

  return {
    props: {
      pokemon: await resp.json()
    }
  }
}

export default function Home({pokemon}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
      <h2 className={styles.title}>Pokemon List</h2>
        <div className={styles.grid}>
          {pokemon.map((pokemon) => {
            return (
              <div className={styles.card} key={pokemon.id}>
                <Link href={`/pokemon/${pokemon.id}`}>
                  <a>
                    <img 
                      src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                      alt={pokemon.name}
                    />
                    <h3>{pokemon.name}</h3>
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
