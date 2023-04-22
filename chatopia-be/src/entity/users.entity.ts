import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  userId: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column('bytea', { nullable: true })
  avatar: Buffer;

  @Column()
  friends: string[];
}
