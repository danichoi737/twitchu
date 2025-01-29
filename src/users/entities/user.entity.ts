import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 40 })
  email: string;

  @Column({ length: 150 })
  password: string;

  @Column({ length: 150 })
  salt: string;

  @Column("timestamptz")
  @CreateDateColumn()
  createdAt: Date;

  @Column("timestamptz")
  @UpdateDateColumn()
  updatedAt: Date;

  @Column("timestamptz")
  @DeleteDateColumn()
  deletedAt: Date;
}
