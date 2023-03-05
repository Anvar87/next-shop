
const SubSomeComp = ({res}) => {

  return (
    res.map(item => (
      <div key={item}>
        <h4>{item}</h4>
        <p>Price: 3000 p</p>
      </div>
    ))
  )
};

export default SubSomeComp;