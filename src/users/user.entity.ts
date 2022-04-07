import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('User inserted with an id of', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('User updated with an id of ', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('User removed with an id of', this.id);
  }
}
