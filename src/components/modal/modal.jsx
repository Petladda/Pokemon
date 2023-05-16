
export const Modal = (props) =>{
    const {closemodal,itemmodal} = props
    

    

    return(
        <div> 
            <div className="justify-center fixed inset-0 top-2/4 z-10 -translate-y-2/4 -translate-x-2/4 left-2/4 w-96 h-50 border 
            rounded-md drop-shadow-xl bg-amber-400 ">
                <h5 className="mt-2 text-white">Details</h5>
                <div className="flex flex-col justify-around">
                   <div className="px-14 mx-16 scale-125 ">
                        <img src={itemmodal.image} className="w-36 h-30"></img>
                    </div> 
                    <div className="mb-2">
                        <h5 >#{itemmodal.id}</h5>
                        <p>{itemmodal.name}</p>
                        <p>weight : {itemmodal.weight}</p>
                        <p>height : {itemmodal.height}</p>
                    </div> 
                    
                </div>
                    <button onClick={closemodal} className="  bg-red-600 w-16 h-8 text-white hover:bg-red-400">close</button>
                
                
            </div>
            <div className="fixed top-0 left-0  bg-black w-full h-full opacity-40 "></div>
            
        </div>
       
    )
}