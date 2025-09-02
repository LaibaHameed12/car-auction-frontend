"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Star, Loader2 } from 'lucide-react'
import useCountdown from '@/hooks/useCountdown'
import { useRouter } from 'next/navigation'

export default function LiveAuctionCard({ auction }) {
    const router = useRouter()
    const handleBidClick = () => {
        router.push(`/auctions/${auction._id}`)
    }

    const countdown = useCountdown(auction.endTime)

    return (
        <Card
            key={auction._id}
            className="overflow-hidden gap-2 py-0 rounded-none bg-white shadow-sm hover:shadow-xl transition-all duration-300"
        >
            {/* Header with Trending Badge and Star */}
            <div className="relative border-b">
                <div className="flex items-start justify-between">
                    {auction.totalBids > 2 ? (
                        <Badge className="bg-red-500 hover:bg-red-600 rounded-none text-white px-1 py-1 flex items-center gap-1">
                            <span className="text-xs font-medium">Trending</span>
                            <TrendingUp className="w-3 h-3" />
                        </Badge>
                    ) : (
                        <div></div>
                    )}

                    <button className="text-[#2E3D83] bg-white shadow-2xl p-2 rounded-b-xl rounded-l-xl border cursor-pointer hover:text-[#F4C23D] transition-colors">
                        <Star className="w-5 h-5" />
                    </button>
                </div>

                <h3 className="text-center font-semibold text-black mb-4">
                    {auction.car.year} {auction.car.make} {auction.car.model}
                </h3>
            </div>

            {/* Car Image */}
            <div className="relative px-4">
                <div className="h-32 bg-gradient-to-b rounded-lg flex items-center justify-center">
                    <img
                        src={auction.car.photos?.[0]}
                        alt={`${auction.car.make} ${auction.car.model}`}
                        className="h-full w-full object-contain"
                    />
                </div>
            </div>

            {/* Content */}
            <CardContent className="p-4 bg-white">
                <div className="flex items-center justify-between mb-2">
                    <div className="text-center mb-4">
                        <p className="text-sm font-bold"> ${auction.currentBid}</p>
                        <span className='text-sm font-medium' >Current Bid</span>
                    </div>

                    <div className="text-center mb-4">
                        <p className="text-sm">
                            {countdown || <Loader2 className='animate-spin' />}
                        </p>
                        <span className="text-sm font-semibold">waiting for bid</span>
                    </div>
                </div>

                <Button onClick={handleBidClick} className="w-full bg-[#2E3D83] hover:bg-[#F4C23D] cursor-pointer rounded-sm text-white font-semibold py-3 transition-colors duration-200">
                    Submit A Bid
                </Button>
            </CardContent>
        </Card>
    )
}
