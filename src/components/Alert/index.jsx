import { Icon } from '@iconify/react';
export default function Alert({texto, type}){
    const iconType = type === "success" ? "zondicons:checkmark" : "zondicons:exclamation-outline"
    return(
        <div className={`alert alert-${type}`}><span><Icon icon={iconType} /></span> &nbsp;{texto}</div>
    )
}