"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Minus, Plus } from "lucide-react"

export default function BidControls({ isPlacingBid,bidAmount, setBidAmount, startingBid, totalBids, currentBid, onSubmit, isOwner }) {
  return (
    <Card className="p-6 space-y-4">
      <div className="flex justify-between items-center w-full ">
        <div className="flex flex-col justify-between text-sm">
          <span className="font-bold text-sm text-[#2E3D83]">${startingBid.toLocaleString()}</span>
          <span className="text-xs text-[#939393]">Bid Starts From</span>
        </div>
        <div className="flex flex-col justify-between text-sm">
          <span className="font-bold text-sm text-[#2E3D83]">${currentBid.toLocaleString()}</span>
          <span className="text-xs text-[#939393]">Current Bid</span>
        </div>
      </div>

      <Slider
        value={[bidAmount]}
        min={currentBid}
        max={currentBid + 50000}
        step={100}
        onValueChange={(val) => setBidAmount(val[0])}
      />

      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-between">
          <span className="font-bold text-sm text-[#2E3D83]">{totalBids}</span>
          <span className="text-xs text-[#939393]">Bid Placed</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            className={'text-[#2E3D83] cursor-pointer'}
            size="sm"
            variant="outline"
            onClick={() => setBidAmount(Math.max(bidAmount - 500, currentBid))}
          >
            <Minus />
          </Button>
          <span className="px-4 font-semibold">${bidAmount}</span>
          <Button
            className={'text-[#2E3D83] cursor-pointer'}
            size="sm"
            variant="outline"
            onClick={() => setBidAmount(bidAmount + 500)}
          >
            <Plus />
          </Button>
        </div>
      </div>

      {isOwner ? (
        <p className="text-red-500 text-sm">You cannot bid on your own car</p>
      ) : (
        <Button
          className="w-full bg-[#2E3D83] py-4 font-bold cursor-pointer"
          onClick={onSubmit}
          disabled={isPlacingBid}
        >
          {isPlacingBid ? "Submitting..." : "Submit A Bid"}
        </Button>
      )}

    </Card>
  )
}
