import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'

const AluminiCard = ({studentName, postName, Companyname}) => {
  return (
    <div>
         <Card className="w-[350px] h-[500px] bg-black">
      {/* <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader> */}
      <CardContent className="flex justify-center">
        <img 
         src='https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsX29mZmljZV80M19waG90b19vZl95b3VuZ19pbmRpYW5fbWFuX3dpdGhfc3R1ZGVudF9iYWNrcF83Y2I0ZDBlOS1kNDk3LTQ1M2YtYjBlOS05ZWRkNDkyMTQ2NTAtMi5wbmc.png'
         alt='aluminiImage'
         width={230}
         height={30}
        />
      </CardContent>
      <CardFooter className="flex flex-col justify-center items-center gap-1 py-1">
          <CardTitle className="text-lg font-semibold text-white">{studentName || 'NA'}</CardTitle>
          <Badge>{postName || 'NA'} @ {Companyname || 'NA'}</Badge>
          {/* <p className="text-sm text-white">{postName || 'NA'} @ {Companyname || 'NA'}</p> */}
          <p className="text-sm text-white text-center leading-relaxed">
            Thanks to <span className="font-medium  text-orange-500">jobdekho.com</span>, I gained the right mentorship and resources that helped me crack my dream role at Amazon. The platform's structured guidance was a game-changer in my preparation journey.
          </p>
        </CardFooter>
    </Card>
    </div>
  )
}

export default AluminiCard