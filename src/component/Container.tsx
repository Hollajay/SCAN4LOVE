
interface containerProps {
 children: React.ReactNode   
}
export const Container: React.FC<containerProps> = ({children}) => {
  return (
    <div
    className="
     lg:w-2/8
     md:w-3/4
     w-full 
     relative 
     pb-6
    "
    >{children}
    </div>
  )
}
