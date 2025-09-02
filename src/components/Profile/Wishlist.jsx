import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Heart } from 'lucide-react'

export default function Wishlist({wishlists}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Wishlist ({wishlists.length})</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {wishlists.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="relative">
              {/* Car Image */}
              <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <span className="text-gray-600 text-4xl">🚗</span>
              </div>
              {item.featured && (
                <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600 text-white">
                  Trending
                </Badge>
              )}
              <Button 
                variant="ghost" 
                size="sm" 
                className="absolute top-3 right-3 p-1 h-8 w-8 bg-white/80 hover:bg-white"
              >
                <Heart className="w-4 h-4 fill-red-500 text-red-500" />
              </Button>
            </div>

            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < item.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {item.description} <span className="text-indigo-600 cursor-pointer hover:underline">View Details</span>
              </p>

              {/* Price and Bids */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <span className="text-lg font-bold text-indigo-600">{item.price}</span>
                  <p className="text-xs text-gray-500">Current Bid</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-gray-800">{item.totalBids}</span>
                  <p className="text-xs text-gray-500">Total Bids</p>
                </div>
              </div>

              {/* Timer */}
              <div className="flex justify-center space-x-2 mb-2">
                <div className="text-center">
                  <div className="bg-gray-800 text-white px-1.5 py-1 rounded text-xs font-mono">
                    {item.timeLeft.days}
                  </div>
                  <span className="text-xs text-gray-500">Days</span>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 text-white px-1.5 py-1 rounded text-xs font-mono">
                    {item.timeLeft.hours}
                  </div>
                  <span className="text-xs text-gray-500">Hrs</span>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 text-white px-1.5 py-1 rounded text-xs font-mono">
                    {item.timeLeft.minutes}
                  </div>
                  <span className="text-xs text-gray-500">Min</span>
                </div>
                <div className="text-center">
                  <div className="bg-gray-800 text-white px-1.5 py-1 rounded text-xs font-mono">
                    {item.timeLeft.seconds}
                  </div>
                  <span className="text-xs text-gray-500">Sec</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 text-center mb-4">Time Left</p>

              <div className="text-center mb-4">
                <p className="text-sm font-medium text-gray-700">{item.endTime}</p>
                <p className="text-xs text-gray-500">End Time</p>
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