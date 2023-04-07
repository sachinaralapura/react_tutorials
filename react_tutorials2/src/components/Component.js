import React, { useContext } from 'react'
import { User } from '../App'

function ComponentB() {
    const user = useContext(User)
  return (
    <div>{user}</div>
  )
}

export default ComponentB