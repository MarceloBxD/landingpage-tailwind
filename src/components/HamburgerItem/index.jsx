export const HamburgerItem = ({ children }) => {
  return (
    <div className="p-2 border-b-2 z-10 rounded-sm  hover:bg-white hover:text-black cursor-pointer transition-all duration-400">
      {children}
    </div>
  );
};
