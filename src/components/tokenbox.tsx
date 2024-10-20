const TokenBox = (
  props: {
    id: string,
    caption: string,
    token: string,
    tokenPrice: number , 
    tokenAmount: number,
    onChange: (newValue:string)=>void 
  }
)=>{    
  return (
      <div className="flex flex-col gap-1" >
        <div className="flex self-start text-base" >{props.caption}</div>
        <div className="flex flex-row justify-between items-center gap-1  border-x border-y rounded-md px-2 
        bg-zinc-800 border-zinc-600">
          <div>
            <label
              htmlFor={props.id}            
            >
            <input
              type="text"
              onChange={(el)=>props.onChange(el.target.value)}
              id={props.id}
              placeholder="0"
              value={props.tokenAmount}
              className="text-xl p-3 bg-zinc-800"              
            /></label>
          </div>
          <div className="text-xl">{props.token}</div>
        </div>
        <div className="flex self-start text-base" >~${props.tokenPrice * props.tokenAmount }</div>
      </div>
    )
}

export {TokenBox}