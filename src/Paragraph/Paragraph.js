function Paragraph ({size , color, children}){
   const style ={
       fontSize :size,
       color:color
   };
   return <p style={style}>{children}</p>
}
export default Paragraph