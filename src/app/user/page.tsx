'use client'

import { useContext } from 'react'
import { UserContext } from 'src/app/context-provider'
import Login from './Login/Login'

export default function UserPage() {
  const [userContext, setUserContext] = useContext(UserContext)
  const isUserNull = userContext ? 'already logged in' : <Login/>
  const wrapper = <section className=''>{isUserNull}</section>
  return wrapper
}

