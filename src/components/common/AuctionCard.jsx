import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Heart } from 'lucide-react'
import Image from 'next/image'
import useTimeLeft from '@/hooks/useTimeLeft'
import { useRouter } from 'next/navigation'

export default function AuctionCard({ auction }) {
    const timeLeft = useTimeLeft(auction.endTime)

    const router = useRouter()
    const handleBidClick = () => {
        router.push(`/auctions/${auction._id}`) 
    }

    return (
        <Card className="overflow-hidden hover:shadow-lg py-0 rounded-sm transition-shadow bg-white">
            <div className="flex items-center">
                {/* Car Image */}
                <div className="relative w-52 h-40 flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br flex items-center justify-center">
                        <Image src={auction.car.photos?.[0]} alt={"car photo"} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" objectFit='contain' />
                    </div>
                    {auction.featured && (
                        <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1">
                            Featured
                        </Badge>
                    )}
                </div>

                {/* Car Details */}
                <CardContent className="flex-1 p-6 gap-6 flex items-center w-full">
                    <div className='w-2/5'>
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-semibold text-[#2E3D83]">
                                {auction.car.year} {auction.car.make} {auction.car.model}
                            </h3>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="p-1 h-8 w-8 hover:bg-gray-100"
                            >
                                <Heart className="w-5 h-5 text-gray-400" />
                            </Button>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < auction.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                />
                            ))}
                        </div>

                        {/* Description */}
                        <p className="text-[#939393] text-sm mb-6 line-clamp-3 leading-relaxed">
                            {auction.car.description} <span className="text-indigo-600 cursor-pointer hover:underline">View Details</span>
                        </p>
                    </div>

                    <div className="flex flex-col justify-between w-3/5 ">
                        <div className="flex items-start justify-between pb-6">
                            {/* Left side - Price and Time */}
                            <div>
                                <div className="mb-4">
                                    <span className="text-sm font-bold text-[#2E3D83]">${auction.currentBid}</span>
                                    <p className="text-xs text-[#939393]">Current Bid</p>
                                </div>

                                {/* Timer */}
                                <div className="flex items-center space-x-3 text-sm">
                                    <div className="text-center">
                                        <div className="bg-transparent border text-[#2E3D83] px-2 py-1 rounded text-xs font-mono min-w-[28px]">
                                            {timeLeft.days}
                                        </div>
                                        <span className="text-xs text-gray-500 mt-1 block">Days</span>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-transparent border text-[#2E3D83] px-2 py-1 rounded text-xs font-mono min-w-[28px]">
                                            {timeLeft.hours}
                                        </div>
                                        <span className="text-xs text-gray-500 mt-1 block">Hrs</span>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-transparent border text-[#2E3D83] px-2 py-1 rounded text-xs font-mono min-w-[28px]">
                                            {timeLeft.minutes}
                                        </div>
                                        <span className="text-xs text-gray-500 mt-1 block">Min</span>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-transparent border text-[#2E3D83] px-2 py-1 rounded text-xs font-mono min-w-[28px]">
                                            {timeLeft.seconds}
                                        </div>
                                        <span className="text-xs text-gray-500 mt-1 block">Sec</span>
                                    </div>
                                </div>
                                <p className="text-[10px] text-gray-500">Time Left</p>
                            </div>

                            {/* Right side - Bids and End Time */}
                            <div className="text-right">
                                <div className="mb-4">
                                    <span className="text-sm font-bold text-[#2E3D83]">{auction.totalBids}</span>
                                    <p className="text-xs text-[#939393]">Total Bids</p>
                                </div>

                                <div className="mb-6">
                                    <p className="text-sm font-bold text-[#2E3D83]">
                                        {new Date(auction.endTime).toLocaleString()}
                                    </p>
                                    <p className="text-xs text-[#939393]">End Time</p>
                                </div>
                            </div>
                        </div>
                        <Button
                        onClick={handleBidClick}
                            className="cursor-pointer bg-transparent border border-[#2E3D83] rounded-sm text-[#2E3D83] hover:bg-[#2E3D83] hover:text-white px-8 py-4 font-bold">
                            Submit A Bid
                        </Button>
                    </div>
                </CardContent>
            </div>
        </Card>
    )
}
