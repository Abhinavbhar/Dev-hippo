'use client'
import { formatPrice } from '@/lib/utils';
import { Separator } from './ui/separator';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { ShoppingCart } from 'lucide-react'
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
const Cart = () => {
  const itemCount = 0;
  const fee = 10;
  const price = 50;

  return <Sheet>
    <SheetTrigger className='group -m-2 flex items-center p-2'>
      <ShoppingCart className='h-5 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'></ShoppingCart>
      <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
        0
      </span>
    </SheetTrigger>
    <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
      <SheetHeader className='space-y-2.5 pr-6'>
        <SheetTitle>Cart{'       '}{itemCount}</SheetTitle>
      </SheetHeader>
      {itemCount > 0 ? (<>
        <div className='flex -w-full flex-col pr-6'>
          {/*cart logic of cart items */}
          cart items
        </div>
        <div className='space-y-4 pr-6'>
          <Separator />
          <div className='space-y-1.5 pr-6'>
            <div className='flex'>
              <span className='flex-1'>Shipping</span>
              <span>Free</span>
            </div>
            <div className='flex'>
              <span className='flex-1'>Transaction fee</span>
              <span>{formatPrice((fee), { currency: "USD" })}</span>
            </div>
            <div className='flex'>
              <span className='flex-1'>Price</span>
              <span>{formatPrice((price), { currency: "USD" })}</span>
            </div>
            <div className='flex'>
              <span className='flex-1'>Price</span>
              <span>{formatPrice((fee + price), { currency: "USD" })}</span>
            </div>
          </div>
        </div>
      </>) : (<div className='flex h-full flex-col items-center justify-center space-y-1'>
        <div className='relative mb-4 h-60 w-60 text-muted-foreground'>
          <Image src="/hippo-empty-cart.png" alt='empty-hippo-image' fill aria-hidden='true'></Image>

        </div>
        <div className='text-xl font-semibold'>Your cart is empty</div>
        <SheetTrigger>
          <Link href='/products' className={buttonVariants({
            variant: 'link',
            size: 'sm',
            className: 'text-sm text-muted-foreground'
          })}>
            Add items to your cart to checkout
          </Link>
        </SheetTrigger>

      </div>)}
      <SheetFooter>

        <SheetTrigger asChild>
          <Link href='/cart' className={buttonVariants({ className: 'w-full' })}>Continue to Checkout</Link>
        </SheetTrigger>

      </SheetFooter>
    </SheetContent>
  </Sheet>
}
export default Cart