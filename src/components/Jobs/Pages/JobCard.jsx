import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import JobDetails from './JobDetails';
const JobCard = ({
  logo,       
  title,
  company,
  location,
  type,
  postedDate,
  postedBy,
  lastDate,
  onApply,
}) => {
  return (
    <div className="flex flex-col bg-black text-white shadow-md rounded-2xl p-6 w-[300px] max-w-md border border-gray-700 hover:shadow-lg transition duration-300 space-y-4">
      
      {/* Logo and Title */}
      <div className="flex items-center gap-4">
        {logo && (
          <img
            src={logo}
            alt="NA"
            className="w-12 h-12 bg-white  object-contain rounded-full border border-gray-700"
          />
        )}
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-400 mt-1">{company} • {location}</p>
        </div>
      </div>

      {/* Job Details */}
      <div className="text-sm text-gray-300 space-y-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="bg-blue-200 text-blue-900 px-2 py-1 rounded-full text-xs">{type}</span>
          <span className="text-gray-400">Posted: {postedDate}</span>
        </div>
        <div>
          <span className="font-medium text-white">Posted By:</span> {postedBy}
        </div>
        <div>
          <span className="font-medium text-white">Last Date to Apply:</span> {lastDate}
        </div>
      </div>

      {/* Apply Button */}
      <div className="mt-2">
        <Button
          onClick={onApply}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-700 w-full cursor-pointer"
        >
          Apply Now
        </Button>
        <Dialog >
          <DialogTrigger className="w-full">
            <Button className="mt-2 w-full rounded-xl  bg-orange-500 hover:bg-orange-700 cursor-pointer">
          View Details
        </Button>
          </DialogTrigger>
          <DialogContent className="bg-black text-white">
            <DialogHeader>
              <DialogTitle>Job Details</DialogTitle>
              <DialogDescription>
                <JobDetails/>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        
      </div>
    </div>
  );
};

export default JobCard;
