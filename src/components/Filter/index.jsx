import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

import { Label } from '../ui/label';

const Filter = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobType, setJobType] = useState('');
  const [location, setLocation] = useState('');

  const handleApplyFilters = () => {
    console.log('Filters:', { jobTitle, jobType, location });
    // You can call an API or update job list state here
  };

  const handleResetFilters = () => {
    setJobTitle('');
    setJobType('');
    setLocation('');
  };

  return (
    <div className="w-full px-4 py-6 bg-neutral-950 text-white border-b border-neutral-800">
        <Label>Filter</Label>
      <div className="mt-4">

        {/* Job Title Search */}
        <Input
          placeholder="Search by job title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="bg-neutral-900 border-gray-700 text-white mb-4"
        />

        {/* Job Type Filter */}
        <Select value={jobType} onValueChange={setJobType}>
          <SelectTrigger className="bg-neutral-900 border-gray-700 text-white w-full mb-4">
            <SelectValue placeholder="Job Type" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-900 text-white">
            <SelectItem value="full-time">Full-time</SelectItem>
            <SelectItem value="part-time">Part-time</SelectItem>
            <SelectItem value="internship">Internship</SelectItem>
            <SelectItem value="remote">Remote</SelectItem>
          </SelectContent>
        </Select>

        {/* Location Filter */}
        <Input
          placeholder="Search by location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="bg-neutral-900 border-gray-700 text-white mb-4"
        />

        


        
       
      </div>
      <div className='flex justify-between gap-3'>
        <Button
          onClick={handleApplyFilters}
          className="bg-blue-600 hover:bg-blue-700 w-35"
        >
          Apply
        </Button>

        {/* Reset Button */}
        <Button
          variant="outline"
          onClick={handleResetFilters}
          className="border-gray-600 text-gray-300 bg-red-700 hover:bg-neutral-800 w-35"
        >
          Clear
        </Button>
        </div>
    </div>
  );
};

export default Filter;
