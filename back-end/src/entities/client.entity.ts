import { Entity,Column, PrimaryGeneratedColumn,CreateDateColumn, OneToMany} from "typeorm";
import {Exclude} from "class-transformer"
import { Contact } from "./contact.entity";

@Entity()
export class Client{

    @PrimaryGeneratedColumn()
    id : number

    @Column({unique:  true})
    email : string

    @Column()
    full_name : string

    @Column()
    @Exclude()
    password : string

    @Column({length : 10})
    phone : string

    @CreateDateColumn()
    created_at : Date

    @OneToMany(()=> Contact,(contact)=> contact.client)
    contacts : Contact[]
}   