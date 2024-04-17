"use client"

export const MainProducts = () => {

  console.log("variable entorno", process.env.NEXT_PUBLIC_SHOPIFY_HOSTNAME)

  return (
    <p>Main Products</p>
  )
}