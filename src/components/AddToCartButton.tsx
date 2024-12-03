'use client'

import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { useCart } from '@/hooks/use-cart'
import { IProduct } from '@/types/product' // Adjust path if needed

const AddToCartButton = ({
  product,
}: {
  product: IProduct
}) => {
  const { addItem } = useCart() // Using the addItem function from the cart context
  const [isSuccess, setIsSuccess] = useState<boolean>(false) // State to track if the item was added successfully

  useEffect(() => {
    if (isSuccess) {
      // Set a timeout to reset the success state after 2 seconds
      const timeout = setTimeout(() => {
        setIsSuccess(false)
      }, 2000)

      // Clear timeout if the component unmounts
      return () => clearTimeout(timeout)
    }
  }, [isSuccess])

  return (
    <Button
      onClick={() => {
        addItem(product) // Add the product to the cart
        setIsSuccess(true) // Set success state to true
      }}
      size='lg'
      className='w-3/4'>
      {isSuccess ? 'Added!' : 'Add to cart'}
    </Button>
  )
}

export default AddToCartButton
