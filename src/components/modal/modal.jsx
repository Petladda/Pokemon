
export const Modal = (props) =>{
    const {closemodal,itemmodal} = props
    

    return(
        <div> 
            <div className="justify-center fixed inset-0 top-2/4 z-10 -translate-y-2/4 -translate-x-2/4 left-2/4 w-96 h-50 border-2 
            rounded-md drop-shadow-xl bg-amber-400 ">
                <h5 className="mt-2 text-white text-lg">Details</h5>
                <div className="flex flex-col justify-around ">
                   <div className="px-14 mx-16 scale-125 ">
                        <img src={itemmodal.image} className="w-36 h-30  drop-shadow-2xl"></img>
                    </div> 
                    <div className="mb-1">
                        <h2 className="text-2xl ">{itemmodal.name}</h2>
                        <h5 >#{itemmodal.id}</h5>
                        <p className="flex flex-row justify-around  mb-2 drop-shadow-lg text-slate-50 ">
                            weight : {itemmodal.weight} | 
                            height : {itemmodal.height}</p>
                       
                    </div> 
                    
                </div>
                    <button onClick={closemodal} className="  bg-red-600 w-16 h-8 text-white hover:bg-red-400 drop-shadow-md">close</button>
                
                
            </div>
            <div className="fixed top-0 left-0  bg-black w-full h-full opacity-40 "></div>
            
        </div>
       
    )
}