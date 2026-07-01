const BASE_URL = 'https://dummyjson.com';

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) {
    throw new Error('Error al obtener los productos');
  }
  const data = await res.json();
  return data.products;
}

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/products/categories`);
  if (!res.ok) {
    throw new Error('Error al obtener las categorías');
  }
  return res.json();
}