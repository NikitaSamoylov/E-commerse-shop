interface IProductProps {
  params: { id: string };
};

const Product: React.FC<IProductProps> = ({ params: { id } }) => {
  return (
    <div>{ id }</div>
  )
};

export default Product;