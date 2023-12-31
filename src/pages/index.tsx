import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Button } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Button sx={{ padding: 5 }} variant='contained' color='primary'>Hola camada 2</Button>
      </main>
    </>
  )
}
