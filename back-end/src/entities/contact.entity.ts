import { Entity,Column, PrimaryGeneratedColumn,CreateDateColumn, ManyToOne} from "typeorm";
import { Client } from "./client.entity";

@Entity()
export class Contact{

    @PrimaryGeneratedColumn()
    id : number

    @Column({nullable : true})
    email : string

    @Column({nullable: true})
    full_name : string

    @Column({length : 10})
    phone : string

    @CreateDateColumn()
    created_at : Date

    @ManyToOne(()=> Client,(client)=> client.contacts,{onDelete : "CASCADE"})
    client : Client
}   