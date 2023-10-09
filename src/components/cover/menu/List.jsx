const List = ({ children }) => {
  return (
    <div className='text-secondary cursor-pointer transition-colors hover:text-highlight'>
      {children}
    </div>
  );
};

export default List;
