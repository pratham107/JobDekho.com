import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const JobDetails = () => {
  return (
    <div className="h-[500px] w-full p-6 overflow-y-auto bg-neutral-950 text-white">
      <div className="max-w-3xl mx-auto space-y-6">

        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold">Frontend Developer</h1>
          <p className="text-sm text-gray-400 mt-1">at Google • Bangalore, India</p>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-3 text-sm text-gray-300">
          <Badge variant="secondary">Full-Time</Badge>
          <span>Posted on: May 10, 2025</span>
          <span>Last Date to Apply: May 25, 2025</span>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-1">Description:</h2>
          <p>
            We are looking for a skilled Frontend Developer with experience in React and TailwindCSS
            to join our dynamic team. You’ll be building scalable, high-performance applications with
            an excellent user experience.
          </p>
        </div>

        {/* Responsibilities */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-1">Responsibilities:</h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Develop responsive web applications</li>
            <li>Collaborate with backend developers and designers</li>
            <li>Optimize performance and accessibility</li>
          </ul>
        </div>

        {/* Action */}
        <div className="pt-4">
          <Button
            className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-700 w-full cursor-pointer"
            >
            Apply Now
            </Button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
