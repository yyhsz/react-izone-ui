import React from 'react'


interface iconProps {
  name: string
}

const Icon: React.FunctionComponent<iconProps> = ({ name }) => {



  return (
    <span>{name}</span>
  )
}
export default Icon