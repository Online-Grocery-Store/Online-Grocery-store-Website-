import {Entity,
    PrimaryGeneratedColumn,Column,
    BeforeInsert} from "typeorm";
    import * as bcrypt from "bcrypt";
@Entity()
export class User{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({unique:true})
    username:string;
    @Column()
    name: string;
    @Column({unique:true})
    email: string;
    @Column({select:false})
    password:string;
    @BeforeInsert()
    async passhash(pass:string){
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(
            this.password,salt
        )

    }


}