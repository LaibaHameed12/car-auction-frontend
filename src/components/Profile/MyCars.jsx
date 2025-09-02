import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function MyCars({myCars}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">My Cars</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {myCars.map((car) => (
          <Card key={car.id} className="overflow-hidden">
            <div className="relative">
              {/* Car Image */}
              <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <span className="text-gray-600 text-4xl">🚗</span>
              </div>
              {car.featured && (
                <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600 text-white">
                  Featured
                </Badge>
              )}
            </div>

            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{car.title}</h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Winning/Current Bid */}
                <div>
                  <span className="text-lg font-bold text-indigo-600">{car.winningBid}</span>
                  <p className="text-xs text-gray-500">
                    {car.status === 'sold' ? 'Winning Bid' : 'Current Bid'}
                  </p>
                </div>

                {/* Total Bids */}
                <div className="text-right">
                  <span className="text-lg font-bold text-gray-800">{car.totalBids}</span>
                  <p className="text-xs text-gray-500">Total Bids</p>
                </div>
              </div>

              {/* Timer or Sold Status */}
              {car.status === 'sold' ? (
                <div className="text-center">
                  <Button disabled className="w-full bg-gray-400 text-white">
                    Sold
                  </Button>
                </div>
              ) : (
                <div>
                  <div className="flex justify-center space-x-2 mb-4">
                    <div className="text-center">
                      <div className="bg-gray-800 text-white px-2 py-1 rounded text-xs font-mono">
                        {car.timeLeft.days}
                      </div>
                      <span className="text-xs text-gray-500">Days</span>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-800 text-white px-2 py-1 rounded text-xs font-mono">
                        {car.timeLeft.hours}
                      </div>
                      <span className="text-xs text-gray-500">Hrs</span>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-800 text-white px-2 py-1 rounded text-xs font-mono">
                        {car.timeLeft.minutes}
                      </div>
                      <span className="text-xs text-gray-500">Min</span>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-800 text-white px-2 py-1 rounded text-xs font-mono">
                        {car.timeLeft.seconds}
                      </div>
                      <span className="text-xs text-gray-500">Sec</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 text-center mb-4">Time Left</p>
                  
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                    End Bid
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}