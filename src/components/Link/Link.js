
export default function Link(props){
    let title = props.lnk.title;
    let url = props.lnk.url;
    return(
        <a className="navLinks" href={url} >{title}</a>
    )
}