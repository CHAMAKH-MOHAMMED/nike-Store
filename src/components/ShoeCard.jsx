
const ShoeCard = ({imgURL,ChangeBigShoeImage,bigShoeImg}) => {
    const handelClick=()=> {
        if(bigShoeImg !== imgURL.bigShoeImg){
            ChangeBigShoeImage(
                imgURL.bigShoe
            )
        }
    }
  return (
    <div className={`border-2 rounded-1 
        ${bigShoeImg=== imgURL.bigShoe ? 'border-coral-red ': 'border-transparent'} 
        cursor-pointer max-sm:flex-1

    `}
    onClick={handelClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover">
        <img 
        src={imgURL.thumbnail}  
        alt="Shoew collection"
        width={127}
        height={103}
        className="object-contain"
        />

      </div>
    </div>
  )
}

export default ShoeCard
