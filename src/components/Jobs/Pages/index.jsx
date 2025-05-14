import React, { useState } from 'react';
import JobCard from './JobCard';
import Filter from '@/components/Filter';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const ExploreOpportunity = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden md:block md:col-span-3 text-white">
        <Filter />
      </div>

      {/* Job Listings */}
      <div className="col-span-12 md:col-span-9 text-white p-4 rounded">
        {/* Mobile Filter Button */}
        <div className="md:hidden flex justify-end mb-4">
          <Sheet open={showFilter} onOpenChange={setShowFilter} >
            <SheetTrigger asChild>
              <Button variant="outline" className="bg-black border-orange-500 rounded-full text-gray-300 cursor-pointer">
              Apply Filter
            </Button>

            </SheetTrigger>
            <SheetContent side="bottom" className="bg-neutral-950 text-white w-full sm:max-w-sm">
              <Filter />
            </SheetContent>
          </Sheet>
        </div>

        {/* Job Cards */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 overflow-y-auto h-[650px] p-2 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
          {[...Array(14)].map((_, i) => (
            <JobCard
              key={i}
              logo="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
              title="React JS Developer"
              company="Tech Solutions"
              location="Remote"
              type="Full-Time"
              postedDate="May 4, 2025"
              postedBy="Ankita Sharma (HR)"
              lastDate="May 15, 2025"
              onApply={() => alert('Applying for React JS Developer')}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreOpportunity;
