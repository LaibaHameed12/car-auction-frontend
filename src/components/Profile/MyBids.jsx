import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Heart } from 'lucide-react'

export default function MyBids({bids}) {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">My Bids</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bids.map((bid) => (
                    <Card key={bid.id} className="overflow-hidden">
                        <div className="relative">
                            {/* Car Image */}
                            <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                                <span className="text-gray-600 text-4xl">🚗</span>
                            </div>
                            {bid.featured && (
                                <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600 text-white">
                                    Trending
                                </Badge>
                            )}
                            <Button
                                variant="ghost"
                                size="sm"
                                className="absolute top-3 right-3 p-1 h-8 w-8 bg-white/80 hover:bg-white"
                            >
                                <Heart className="w-4 h-4" />
                            </Button>
                        </div>

                        <CardContent className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{bid.title}</h3>

                            {/* Rating */}
                            <div className="flex items-center mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < bid.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                {/* Winning/Current Bid */}
                                <div>
                                    <span className="text-sm font-bold text-indigo-600">{bid.winningBid}</span>
                                    <p className="text-xs text-gray-500">Winning Bid</p>
                                </div>

                                {/* Your Current Bid */}
                                <div>
                                    <span className="text-sm font-bold text-green-600">{bid.currentBid}</span>
                                    <p className="text-xs text-gray-500">Your Current Bid</p>
                                </div>
                            </div>

                            {/* Timer */}
                            <div className="flex justify-center space-x-2 mb-2">
                                <div className="text-center">
                                    <div className="bg-gray-800 text-white px-1.5 py-1 rounded text-xs font-mono">
                                        {bid.timeLeft.days}
                                    </div>
                                    <span className="text-xs text-gray-500">Days</span>
                                </div>
                                <div className="text-center">
                                    <div className="bg-gray-800 text-white px-1.5 py-1 rounded text-xs font-mono">
                                        {bid.timeLeft.hours}
                                    </div>
                                    <span className="text-xs text-gray-500">Hrs</span>
                                </div>
                                <div className="text-center">
                                    <div className="bg-gray-800 text-white px-1.5 py-1 rounded text-xs font-mono">
                                        {bid.timeLeft.minutes}
                                    </div>
                                    <span className="text-xs text-gray-500">Min</span>
                                </div>
                                <div className="text-center">
                                    <div className="bg-gray-800 text-white px-1.5 py-1 rounded text-xs font-mono">
                                        {bid.timeLeft.seconds}
                                    </div>
                                    <span className="text-xs text-gray-500">Sec</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 text-center mb-4">Time Left</p>

                            <div className="text-center mb-4">
                                <span className="text-sm font-bold text-gray-800">{bid.totalBids}</span>
                                <p className="text-xs text-gray-500">Total Bids</p>
                            </div>

                            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                                Submit A Bid
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
