import { useRouter } from 'next/router' //이게 있어야함 아니면 에러
import React from 'react'

export default function User() {
  const router = useRouter()
  console.log(router.query) // 보여줘라
  const { username } = router.query
  return <h1>User Detail Page - {username}</h1>
}
