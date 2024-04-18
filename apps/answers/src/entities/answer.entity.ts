import {
  Column,
  Table,
  Model,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  tableName: 'answer',
})
export class Answer extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  answer: string;

  @Column
  questionId: number;
}
