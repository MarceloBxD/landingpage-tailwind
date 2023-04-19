import { HamburgerItem } from "../HamburgerItem";

export const HamburgerMenu = ({ isOpen, onClick }) => {
  return (
    <div className="absolute top-10 mt-2 right-6 bg-gray-500 w-40 h-auto z-20 rounded-lg shadow-lg">
      <div className="flex flex-col gap-3 p-3">
        <HamburgerItem>Home</HamburgerItem>
        <HamburgerItem>About</HamburgerItem>
        <HamburgerItem>Contact</HamburgerItem>
        <HamburgerItem>Sign In</HamburgerItem>
      </div>
    </div>
  );
};
