import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar";
  import { Link } from 'react-router-dom';
  import { Button } from "@/components/ui/button";
  import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
  } from "@/components/ui/dropdown-menu";
  import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { Menu } from "lucide-react"; // For hamburger icon
  import React from "react";
  
  const Navbar = () => {
    return (
      <div className="flex justify-between items-center px-4 py-2 text-white">
        <div className="logo text-orange-500 text-xl font-bold">JobDekho.com</div>
  
        {/* Desktop nav - visible on large screens only */}
        <div className="hidden lg:flex items-center gap-4">
          <ul className="flex gap-4">
            <li>
               <Link to="/">
                  <Button variant="link" className="text-white">Home</Button>
               </Link>
            </li>
            <li>
               <Link to="/opportunities">
                  <Button variant="link" className="text-white">Explore opportunity</Button>
               </Link>
            </li>
            <li><Button variant="link" className="text-white">Your Applied Jobs</Button></li>
            <li><Button variant="link" className="text-white">Profile</Button></li>
            <li><Button variant="link" className="text-white">Contact Us</Button></li>
          </ul>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>View Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
  
        {/* Mobile/Tablet nav - visible only on small and medium screens */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-gray-800 text-white w-64">
              <div className="flex flex-col gap-4 mt-6">
                <Button variant="link" className="text-white justify-start">
                 <Link to="/">
                  Home
                 </Link>
                  
                </Button>
                <Button variant="link" className="text-white justify-start">
                 <Link to="/opportunities">
                  Explore opportunity
                 </Link>
                  
                </Button>
                <Button variant="link" className="text-white justify-start">Your Applied Jobs</Button>
                <Button variant="link" className="text-white justify-start">Profile</Button>
                <Button variant="link" className="text-white justify-start">Contact Us</Button>
                <hr className="border-gray-600" />
                <Button variant="link" className="text-white justify-start">View Profile</Button>
                <Button variant="link" className="text-white justify-start">Settings</Button>
                <Button variant="link" className="text-white justify-start">Logout</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  