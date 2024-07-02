import Image from 'next/image';
import React from 'react'

const random = () => Math.floor(Math.random()* 123) + 1;

export const RandomFox = (): JSX.Element => {
    const image:string = `https://randomfox.ca/images/${random()}.jpg`;
  return (
    <Image
      src={image}
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}


// ** Forma implícito (JSX:Element)**
// const MyComponent = () => {
// 	return (
// 		<div>
// 			<h2>Hola!</h2>
// 		</div>
// 	)
// }

// ** Forma explícita "JSX.Element"**
// const MyComponent = (): JSX.Element => {
// 	return (
// 		<div>
// 			<h2>Hola!</h2>
// 		</div>
// 	)
// }

// ** Usando tipos de React "FunctionComponent"**
// import type { FunctionComponente } from "react"
// ****
// const MyComponent: FunctionComponent = () => {
// 	return (
// 		<div>
// 			<h2>Hola!</h2>
// 		</div>
// 	)
// }

// ** Usando tipos de React "FC"**
// import type { FC } from "react"
// ****
// const MyComponent: FC = () => {
// 	return (
// 		<div>
// 			<h2>Hola!</h2>
// 		</div>
// 	)
// }