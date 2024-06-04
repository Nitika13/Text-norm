import React from 'react'

function Alert(pro){
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    pro.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{capitalize(pro.alert.type)}</strong>: {pro.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}
export default Alert
