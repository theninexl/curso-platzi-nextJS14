
const getProducts = async () => {
  const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2024-04/products.json`, {
    headers: {
      'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY as string,
    }
  })
  const data = await response.json();
  return data
}


export const MainProducts = async () => {
  const products = await getProducts();
  console.log("products", products)

  return (
    <p>Main Products</p>
  )
}