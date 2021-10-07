import {useContext} from "react";
import "./UserId.css"
import {Context} from "../../../context/context";

export const UserId = () => {
    const auth = useContext(Context)
    return (
        <div style={{
            width: "110px",
            height: '90px',
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            color: "white"
        }}>
            <img style={{ width: "75px", height: '75px', borderRadius: '50%' }} src={auth.user.avatar} alt={'dcdkc'}/>
            <span>{auth.user.name} {auth.user.firstname}</span>
        </div>

    )
}