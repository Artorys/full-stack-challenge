import { useContext, useState } from "react";
import { StyledCard } from "./style";
import {FaEdit,FaTrashAlt} from "react-icons/fa"
import {GrContactInfo} from "react-icons/gr"
import { Form } from "../Form";
import { Input } from "../Input";
import { contactUpdateSchema } from "../../schemas/contact.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { Description } from "../Description";
import { Tittle } from "../Tittle";
import { remove } from "../../utils/delete.util";
import { list } from "../../utils/list.util";
import { IContact } from "../../interfaces/contact.interface";
import { ContactsContext } from "../Tittle/contactsContext";
interface ICardProps{
    id : string;
    full_name : string;
    email : string;
    phone : string;
    date : string;
    time : string;
}

export function Card(props : ICardProps){

    const [isDelete,setDelete] = useState(false)
    const [isUpdate,setUpdate] = useState(false)

    const {contacts,setContacts} = useContext(ContactsContext)

    const {handleSubmit,register,formState : {errors}} = useForm({resolver : yupResolver(contactUpdateSchema)})

    return(
        <StyledCard>
            <details>
                <summary>
                    <span onClick={()=>{
                        setUpdate(false)
                        setDelete(false)
                    }} className="show__info">
                        <GrContactInfo></GrContactInfo>
                       <p>Exibir detalhes</p>
                    </span>
                <div className="box__content">
                    <p>
                        Contato {`<${props.id}>`}
                    </p>
                    <div className="box__icon">
                        <FaEdit onClick={async()=>{
                            setUpdate((value)=> true)
                            setDelete(false)
                        }}></FaEdit>
                        <FaTrashAlt onClick={async()=>{
                            setDelete((value)=> true)
                            setUpdate(false)
                        }}></FaTrashAlt>
                    </div>
                </div>
                </summary>
                <>
                    {isUpdate && 
                    <Form id={props.id} handleSubmit={handleSubmit} type="contact" subtype="update">
                        <Input register={{...register("full_name")}} width="100%" text="Nome completo" id="nome" placeholder={props.full_name}></Input>
                        {errors.full_name?.message && <Description>{errors.full_name.message as string}</Description>}
                        <Input register={{...register("email")}} width="100%" text="Email" id="email" placeholder={props.email}></Input>
                        {errors.email?.message && <Description>{errors.email.message as string}</Description>}
                        <Input register={{...register("phone")}} mask="(99)9999-9999" width="100%" text="Telefone" id="telefone" placeholder={props.phone}></Input>
                        {errors.phone?.message && <Description>{errors.phone.message as string}</Description>}
                        <div className="box__button">
                            <Button type="submit" isPadding = {false} width="50%" text="Editar"></Button>
                            <Button onClick={()=>{
                                setUpdate(false)
                            }} isPadding = {false} width="50%" text="Cancelar"></Button>
                        </div>
                    </Form> 
                    }
                    {isDelete 
                    &&
                    <div className="box__delete">
                        <p>Remover contato?</p>
                        <div className="box__button">
                            <Button onClick={async()=>{
                                await remove("contact",props.id)
                                const response = await list("contact")
                                const contactData : IContact[] = (response?.data as any)
                                setContacts(contactData)
                                setDelete(false)
                            }} width="30%" text="Sim"></Button>
                            <Button onClick={()=>{
                                setDelete(false)
                            }} width = "30%" text="Não"></Button>
                        </div>
                    </div> 
                    }
                    {!isDelete && !isUpdate ? <div>
                        <p>Nome: {props.full_name}</p>
                        <p>Telefone: {props.phone}</p>
                        <p>Email: {props.email}</p>
                        <p>Data da criação: {props.date}</p>
                        <p>Hora da criação: {props.time}</p>
                    </div> : <></>}
                </>
            </details>
        </StyledCard>
    )
}