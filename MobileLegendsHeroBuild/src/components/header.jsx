const Header = ({name}) =>{

    return(
          <>
          <header className="py-6 px-20 drop-shadow-md shadow-blue-800">
             <article className='flex justify-between items-center'>
              <div className='flex items-center'>
                     <h1 className="-m-3 text-3x1 font-bold text-blue-600">Mobile Legends Hero Build </h1>
    </div>
    <div>
        <h3 className='text-red-400 font-semibold text-2xl'> {name}</h3>
    </div>
    </article>
     </header>
    
        </>
    
    );
      
}

export default Header;
