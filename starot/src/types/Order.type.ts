export type Product = {
  productID: string
  name: string
  image: string
  unitPrice: number
  amount: number
  price: number
}

export type Order = {
  id: string
  code: string
  total: number
  status: string
  orderDate: string
  orderTime: string
  address: string
  userName: string
  phone: string
  paymentMethod: string
  products: Product[]
}
