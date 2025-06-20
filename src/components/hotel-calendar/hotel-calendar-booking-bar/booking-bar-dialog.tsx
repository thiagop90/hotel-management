'use client'

import {
  User,
  Phone,
  Mail,
  CreditCard,
  X,
  Users,
  ChevronRight,
  Edit2,
  XCircle,
  ReceiptText,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import type { Reservation } from '@/types/hotel-calendar'
import { DialogClose, DialogTitle } from '@/components/ui/dialog'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import dayjs from 'dayjs'

interface BookingBarDialogProps {
  booking: Reservation
}

export function BookingBarDialog({ booking }: BookingBarDialogProps) {
  const startDate = dayjs(booking.startDate)
  const endDate = dayjs(booking.endDate)

  const roomImages = [
    {
      src: '/room-1.jpg',
      alt: 'Hotel room overview',
      title: 'Room Overview',
    },
    {
      src: '/room-2.jpg',
      alt: 'Hotel bathroom',
      title: 'Bathroom',
    },
    {
      src: '/room-3.jpeg',
      alt: 'Hotel room view',
      title: 'Room View',
    },
  ]

  return (
    <div className="my-2 space-y-1">
      <div className="bg-background space-y-5 rounded-t-2xl rounded-b-lg border p-4">
        <DialogTitle className="sr-only" />
        <DialogClose asChild>
          <Button size="icon" variant="outline" className="rounded-full">
            <X />
          </Button>
        </DialogClose>

        <div>
          <Carousel
            opts={{ loop: true }}
            className="w-full overflow-hidden rounded-lg"
          >
            <CarouselContent>
              {roomImages.map((image, index) => (
                <CarouselItem key={index} className="pl-0">
                  <div className="relative aspect-video size-full">
                    <Image
                      src={image.src || '/placeholder.svg'}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="bg-secondary grid grid-cols-[1fr_auto_1fr] rounded-xl px-5 py-4 text-sm">
          <div className="space-y-1.5 text-left">
            <p className="font-semibold">Check-in</p>

            <div className="space-y-0.5">
              <p className="">{startDate.format('ddd, MMM D')}</p>
              <p className="text-muted-foreground">
                {startDate.format('h:mm A')}
              </p>
            </div>
          </div>
          <Separator orientation="vertical" />
          <div className="space-y-1 text-right">
            <p className="font-semibold">Checkout</p>

            <div className="space-y-0.5">
              <p>{endDate.format('ddd, MMM D')}</p>
              <p className="text-muted-foreground">
                {endDate.format('h:mm A')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background space-y-2 rounded-lg border p-4">
        <h3 className="mt-2 text-lg leading-none font-semibold">
          Reservation details
        </h3>

        <div className="divide-y text-sm">
          <div className="space-y-1 py-5">
            <p className="font-semibold">Status</p>
            <Badge variant="outline" className="px-2.5 py-1">
              {booking.status}
            </Badge>
          </div>
          <div className="space-y-1 py-5">
            <p className="font-semibold">Guests</p>
            <span>2 adults, 1 child</span>
          </div>
          <div className="space-y-1 py-5">
            <p className="font-semibold">Confirmation code</p>
            <span>HMKFZW9A5Z</span>
          </div>

          <div className="space-y-2 py-5">
            <p className="font-semibold">Cancellation policy</p>
            <p>
              Free cancellation before {startDate.format('h:mm A')} on{' '}
              {startDate.format('MMM D')}
            </p>

            <a href="#" className="font-medium underline">
              Read more
            </a>
          </div>

          <button className="flex w-full cursor-pointer items-center gap-3 py-4">
            <Users className="size-4.5" />
            <span>Manage guests</span>
            <ChevronRight className="ml-auto size-4" />
          </button>
          <button className="flex w-full cursor-pointer items-center gap-3 py-4">
            <Edit2 className="size-4.5" />
            <span>Change reservation</span>
            <ChevronRight className="ml-auto size-4" />
          </button>
          <button className="flex w-full cursor-pointer items-center gap-3 py-4">
            <XCircle className="size-4.5" />
            <span>Cancel reservation</span>
            <ChevronRight className="ml-auto size-4" />
          </button>
        </div>
      </div>

      <div className="bg-background space-y-2 rounded-lg border p-4">
        <h3 className="mt-2 text-lg leading-none font-semibold">Guest Info</h3>

        <div className="divide-y text-sm">
          <div className="space-y-1 py-4">
            <div className="flex items-center gap-3">
              <User className="size-4.5" />
              <span>{booking.guestName}</span>
            </div>
          </div>

          <div className="space-y-1 py-4">
            <div className="flex items-center gap-3">
              <Phone className="size-4.5" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>

          <div className="space-y-1 py-4">
            <div className="flex items-center gap-3">
              <Mail className="size-4.5" />
              <span>email@example.com</span>
            </div>
          </div>

          <div className="space-y-1 py-4">
            <div className="flex items-center gap-3">
              <CreditCard className="size-4.5" />
              <span>ID: 927384839</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background space-y-2 rounded-t-lg rounded-b-2xl border p-4">
        <h3 className="mt-2 text-lg leading-none font-semibold">
          Payment Info
        </h3>

        <div className="divide-y text-sm">
          <div className="space-y-1 pt-5 pb-3">
            <h4 className="font-semibold">Payment details</h4>
            <span>Total cost: $855.88</span>
          </div>
          <button className="flex w-full cursor-pointer items-center gap-3 py-4">
            <ReceiptText className="size-4.5" />
            <span>Get receipts</span>
            <ChevronRight className="ml-auto size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
