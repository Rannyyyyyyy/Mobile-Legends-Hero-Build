
const Header = ({ name }) => {
  return (
    <header className="py-6 px-20 bg-[#001f3f] drop-shadow-md shadow-blue-700">
      <div className="flex flex-col items-center"> 
        <h1 className="text-7xl font-bold text-white text-center">
          Mobile Legends Hero Build
        </h1>
        {name && (
          <h3 className="text-blue-150 font-semibold text-2xl text-center">
            {name}
          </h3>
        )}
      </div>
    </header>
  );
};

export default Header;
