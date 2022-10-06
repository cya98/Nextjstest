import axios from 'axios'
import React from 'react'
import Coin from '../../components/Coin'
import styles from '../../styles/coin.module.css'

export default function CoinsList({ coinData }) {
  const coins = coinData.coins
  return (
    <div className={styles.container}>
      <h1>Coins List</h1>
      <div className={styles.coinContainer}>
        {coins.map((coin) => {
          return (
            <div key={coin.id} className={styles.coinltem}>
              <Coin coin={coin} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

//밖에서 데아터 읽어오기

export const getStaticProps = async () => {
  const result = await axios.get(
    'https://api.coinstats.app/public/v1/coins?skip=0'
  )
  return {
    props: {
      coinData: result.data,
    },
    revalidate: 10,
  }
}
