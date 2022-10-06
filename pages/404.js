import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function PageNotFound() {
  return (
    <div>
      <div className="container"></div>
      <h1>Page Not Found!</h1>
      <h3>찾는 페이지가 없습니다.</h3>
      <Link href="/">홈으로 돌아가기</Link>
    </div>
  )
}
